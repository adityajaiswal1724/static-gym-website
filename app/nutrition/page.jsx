import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRightIcon,
  CheckIcon,
  HeartPulseIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Nutrition",
  description:
    "Explore nutrition and diet charts for fat loss, weight management, muscle gain, maintenance, and performance from Future Fitness Gym.",
};

const DIET_PLANS = [
  {
    title: "Fat Loss Diet Chart",
    description:
      "A practical eating structure focused on reducing body fat while supporting energy and training.",
    highlights: ["Calorie-aware meals", "High-protein options", "Sustainable food choices"],
  },
  {
    title: "Weight Loss Diet Chart",
    description:
      "A balanced plan designed to support steady weight loss with familiar, manageable meals.",
    highlights: ["Portion guidance", "Balanced daily meals", "Progress-focused approach"],
  },
  {
    title: "Weight Gain Diet Chart",
    description:
      "A nutrient-rich plan for increasing body weight with consistent meals and quality calories.",
    highlights: ["Calorie-dense foods", "Meal frequency guidance", "Healthy weight support"],
  },
  {
    title: "Muscle Gain Diet Chart",
    description:
      "Nutrition built around strength training, recovery, and the protein needs of muscle growth.",
    highlights: ["Protein-rich meals", "Workout fuel", "Recovery nutrition"],
  },
  {
    title: "Maintenance Diet Chart",
    description:
      "A flexible plan for maintaining your current weight, fitness, and daily energy levels.",
    highlights: ["Balanced calories", "Everyday meal structure", "Long-term consistency"],
  },
  {
    title: "Vegetarian Diet Chart",
    description:
      "A complete vegetarian approach with varied protein sources and balanced meal combinations.",
    highlights: ["Vegetarian proteins", "Simple meal options", "Balanced nutrients"],
  },
  {
    title: "High Protein Diet Chart",
    description:
      "A protein-forward plan to help support strength, fullness, muscle recovery, and performance.",
    highlights: ["Protein targets", "Easy food swaps", "Training-day meals"],
  },
  {
    title: "Performance Diet Chart",
    description:
      "A training-focused plan that supports workout energy, hydration, recovery, and performance.",
    highlights: ["Pre-workout fuel", "Post-workout recovery", "Hydration guidance"],
  },
];

function getChartLink(chartName) {
  const message = `I want the ${chartName}.`;
  return `${SITE.contact.whatsappLink}?text=${encodeURIComponent(message)}`;
}

export default function NutritionPage() {
  return (
    <>
      <PageHero
        eyebrow="Nutrition"
        title="Diet Charts For Your Goal"
        subtitle="Choose the plan that matches your fitness goal and message us directly on WhatsApp to get your chart."
      />

      <section className="bg-brand-black py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Choose Your Plan"
            title="Nutrition Made Practical"
            description="Select a chart below to start a WhatsApp conversation with the exact plan name already included."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DIET_PLANS.map((plan) => (
              <a
                key={plan.title}
                href={getChartLink(plan.title)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get ${plan.title} on WhatsApp`}
                className="group flex min-h-80 flex-col rounded-lg border border-white/10 bg-brand-charcoal p-6 transition-colors hover:border-brand-yellow/60 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <HeartPulseIcon className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">{plan.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {plan.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {plan.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-zinc-300">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-brand-yellow" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold uppercase text-brand-yellow">
                  <span className="flex items-center gap-2">
                    <WhatsAppIcon className="h-5 w-5" />
                    Get Chart
                  </span>
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-brand-yellow bg-brand-charcoal px-5 py-4 text-sm leading-relaxed text-zinc-400">
            Diet charts can be adjusted around your food preferences, routine,
            and training goal. For medical conditions or clinical dietary needs,
            consult a qualified healthcare professional.
          </div>
        </div>
      </section>
    </>
  );
}
