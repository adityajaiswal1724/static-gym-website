/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable auto-generated AGENTS.md / CLAUDE.md files.
  agentRules: false,
  // The site is fully static and uses plain <img> tags, so no sharp-based
  // image optimization pipeline is required at build time.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
