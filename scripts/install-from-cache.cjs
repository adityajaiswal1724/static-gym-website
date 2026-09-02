// Extracts the Next.js + React + Tailwind dependency tree from the local npm
// cache directly into node_modules, avoiding the network and npm's stale
// packument handling.

const cacache = require("/opt/homebrew/lib/node_modules/npm/node_modules/cacache");
const tar = require("/opt/homebrew/lib/node_modules/npm/node_modules/tar");
const { mkdirSync, existsSync } = require("node:fs");
const { join } = require("node:path");
const { Readable } = require("node:stream");

const CACHE = "/tmp/npm-cache";
const DEST = "/Users/adityajaiswal/Documents/gym/node_modules";

const ROOTS = [
  { name: "next", range: "16.3.1" },
  { name: "react", range: "19.2.8" },
  { name: "react-dom", range: "19.2.8" },
  { name: "tailwindcss", range: "4.2.1" },
  { name: "@tailwindcss/postcss", range: "4.2.1" },
];

async function listTarballs() {
  const entries = await cacache.ls(CACHE);
  const map = {};
  for (const key of Object.keys(entries)) {
    if (!key.endsWith(".tgz")) continue;
    const prefix = "make-fetch-happen:request-cache:https://registry.npmjs.org/";
    if (!key.startsWith(prefix)) continue;
    const rest = key.slice(prefix.length);
    const idx = rest.indexOf("/-/");
    if (idx === -1) continue;
    const name = decodeURIComponent(rest.slice(0, idx));
    const file = rest.slice(idx + 3);
    const base = file.replace(/\.tgz$/, "");
    const dash = base.lastIndexOf("-");
    const version = base.slice(dash + 1);
    if (!map[name]) map[name] = [];
    map[name].push({ version, key });
  }
  return map;
}

async function getTarballBytes(key) {
  const data = await cacache.get(CACHE, key);
  return data.data;
}

async function readPackageJson(key) {
  const buf = await getTarballBytes(key);
  let json = "";
  await new Promise((resolve, reject) => {
    const parser = tar.t({
      onentry: (entry) => {
        if (entry.path === "package/package.json") {
          entry.on("data", (c) => (json += c.toString("utf8")));
          entry.on("end", () => {});
          entry.resume();
        } else {
          entry.resume();
        }
      },
    });
    parser.on("end", resolve);
    parser.on("error", reject);
    Readable.from(buf).pipe(parser);
  });
  return JSON.parse(json);
}

async function extractTarball(key, name) {
  const buf = await getTarballBytes(key);
  const dest = join(DEST, name);
  mkdirSync(dest, { recursive: true });
  await new Promise((resolve, reject) => {
    const extractor = tar.x({
      cwd: dest,
      strip: 1,
    });
    extractor.on("finish", resolve);
    extractor.on("error", reject);
    Readable.from(buf).pipe(extractor);
  });
}

function compareVersions(a, b) {
  const pa = a.split(".").map((n) => parseInt(n, 10));
  const pb = b.split(".").map((n) => parseInt(n, 10));
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0;
    const y = pb[i] || 0;
    if (x !== y) return x - y;
  }
  return 0;
}

function satisfies(version, range) {
  const r = (range || "").trim();
  if (r === "" || r === "*" || r === "latest") return true;
  if (r === version) return true;
  const op = r.match(/^([\^~><=]+)/);
  const clean = r.replace(/^[\^~><= ]+/, "");
  if (op && op[1] === "^") {
    const [mv, mn, mp] = clean.split(".").map((n) => parseInt(n, 10));
    const [v0, v1, v2] = version.split(".").map((n) => parseInt(n, 10));
    return v0 === mv && compareVersions(`${v1 || 0}.${v2 || 0}.0`, `${mn || 0}.${mp || 0}.0`) >= 0;
  }
  if (op && op[1] === "~") {
    const [mv, mn] = clean.split(".").map((n) => parseInt(n, 10));
    const [v0, v1, v2] = version.split(".").map((n) => parseInt(n, 10));
    return v0 === mv && (v1 || 0) === (mn || 0) && (v2 || 0) >= (parseInt(clean.split(".")[2], 10) || 0);
  }
  if (op && op[1] === ">=") return compareVersions(version, clean) >= 0;
  if (op && op[1] === ">") return compareVersions(version, clean) > 0;
  return compareVersions(version, clean) >= 0;
}

async function main() {
  mkdirSync(DEST, { recursive: true });
  const tarballs = await listTarballs();
  console.log("Cached packages:", Object.keys(tarballs).length);

  const manifests = {};
  const queue = [...ROOTS];
  const ordered = [];
  const seen = new Set();

  while (queue.length) {
    const item = queue.shift();
    const key = `${item.name}@${item.range}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const candidates = tarballs[item.name] || [];
    let best = null;
    for (const c of candidates) {
      if (satisfies(c.version, item.range)) {
        if (!best || compareVersions(c.version, best.version) > 0) best = c;
      }
    }
    if (!best) {
      console.warn("UNRESOLVED", item.name, item.range, "->", candidates.map((c) => c.version).join(","));
      continue;
    }

    let manifest;
    try {
      manifest = await readPackageJson(best.key);
    } catch (e) {
      console.warn("READ FAIL", item.name, best.version, e.message);
      continue;
    }

    const m = {
      name: manifest.name || item.name,
      version: manifest.version || best.version,
      dependencies: { ...(manifest.dependencies || {}), ...(manifest.optionalDependencies || {}) },
      key: best.key,
    };
    manifests[`${m.name}@${m.version}`] = m;
    ordered.push(m);

    for (const [dn, dr] of Object.entries(m.dependencies)) {
      queue.push({ name: dn, range: dr });
    }
  }

  console.log("Resolved", ordered.length, "packages");

  let n = 0;
  for (const m of ordered) {
    const dest = join(DEST, m.name);
    if (existsSync(join(dest, "package.json"))) continue;
    try {
      await extractTarball(m.key, m.name);
      n++;
    } catch (e) {
      console.warn("EXTRACT FAIL", m.name, m.version, e.message);
    }
  }
  console.log("Extracted", n, "packages to", DEST);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
