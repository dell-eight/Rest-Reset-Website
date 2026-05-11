export type ProductCategory = "Bundle" | "Sleep environment" | "Light control" | "Routine";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  category: ProductCategory;
  imagePlaceholder: string;
  benefits: readonly string[];
  checkoutUrl: string;
  includedItems?: readonly {
    name: string;
    role: string;
  }[];
  howToUse: readonly string[];
  scienceNote: string;
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  featured?: boolean;
};

const launchListUrl = "#email-capture";

const checkoutUrls = {
  sleepResetKit: process.env.NEXT_PUBLIC_SLEEP_RESET_KIT_CHECKOUT_URL || launchListUrl,
  weightedEyeMask: process.env.NEXT_PUBLIC_WEIGHTED_EYE_MASK_CHECKOUT_URL || launchListUrl,
  coolingPillowcase: process.env.NEXT_PUBLIC_COOLING_PILLOWCASE_CHECKOUT_URL || launchListUrl,
  blueLightGlasses: process.env.NEXT_PUBLIC_BLUE_LIGHT_GLASSES_CHECKOUT_URL || launchListUrl,
  whiteNoiseMachine: process.env.NEXT_PUBLIC_WHITE_NOISE_MACHINE_CHECKOUT_URL || launchListUrl,
  sleepJournal: process.env.NEXT_PUBLIC_SLEEP_JOURNAL_CHECKOUT_URL || launchListUrl
} as const;

export const products: readonly Product[] = [
  {
    id: "prod_sleep_reset_kit",
    slug: "sleep-reset-kit",
    name: "Sleep Reset Kit",
    description:
      "A beginner-friendly bundle of sleep routine tools for calmer evenings and more consistent recovery habits.",
    price: "$79 estimated",
    category: "Bundle",
    imagePlaceholder: "Kit box, mask, journal, and routine cards",
    benefits: [
      "Supports a more repeatable bedtime routine",
      "Combines light, sound, and habit cues in one simple bundle",
      "Designed for screen-heavy workdays and late nights"
    ],
    checkoutUrl: checkoutUrls.sleepResetKit,
    includedItems: [
      {
        name: "Soft sleep mask",
        role: "Helps reduce light distractions during rest."
      },
      {
        name: "Weighted eye mask",
        role: "Adds gentle pressure as a calming cue for your wind-down routine."
      },
      {
        name: "Cooling pillowcase",
        role: "Supports a cooler, more comfortable sleep environment."
      },
      {
        name: "Comfort earplugs",
        role: "Helps reduce everyday noise distractions."
      },
      {
        name: "Sleep journal",
        role: "Helps organize thoughts and make evening habits easier to repeat."
      },
      {
        name: "Routine cards",
        role: "Simple prompts for building a consistent wind-down habit."
      }
    ],
    howToUse: [
      "Choose a consistent wind-down time that fits your real schedule.",
      "Dim bright screens or switch to lower-light tasks before bed.",
      "Use the mask, earplugs, or pillowcase to reduce common distractions.",
      "Write one quick note in the journal so the habit stays easy to repeat."
    ],
    scienceNote:
      "The kit is built around practical sleep hygiene ideas: lower light exposure, fewer distractions, calmer cues, and routine consistency. It supports habits rather than promising medical outcomes.",
    faqs: [
      {
        question: "Is this the main Rest Reset offer?",
        answer:
          "Yes. The Sleep Reset Kit is the primary bundle and the clearest starting point for a practical rest routine."
      },
      {
        question: "Does the kit guarantee better sleep?",
        answer:
          "No. The kit provides simple tools for rest and recovery habits, but it does not guarantee results or treat sleep conditions."
      },
      {
        question: "Can I buy individual items later?",
        answer:
          "Individual products are planned as supporting options. Join the launch list for updates before ordering opens."
      }
    ],
    featured: true
  },
  {
    id: "prod_weighted_eye_mask",
    slug: "weighted-eye-mask",
    name: "Weighted Eye Mask",
    description:
      "A soft eye mask concept with gentle weight for a more grounded wind-down routine.",
    price: "$24 estimated",
    category: "Light control",
    imagePlaceholder: "Soft weighted eye mask",
    benefits: [
      "Designed to help reduce light distractions",
      "Adds a calming cue to evening routines",
      "Easy to pair with journaling or quiet time"
    ],
    checkoutUrl: checkoutUrls.weightedEyeMask,
    howToUse: [
      "Keep it near your bed or wind-down area.",
      "Put it on after screens are off or dimmed.",
      "Pair it with slow breathing, quiet music, or a short journal prompt."
    ],
    scienceNote:
      "Light control is a basic part of sleep hygiene. This product is positioned as a routine cue that helps reduce light distractions, not as a treatment for sleep problems.",
    faqs: [
      {
        question: "Is the weight adjustable?",
        answer:
          "Exact materials, weight, and sizing will be confirmed before ordering opens."
      },
      {
        question: "Who is it for?",
        answer:
          "It is for people who want a simple light-control cue for calmer evenings after screen-heavy days."
      }
    ]
  },
  {
    id: "prod_cooling_pillowcase",
    slug: "cooling-pillowcase",
    name: "Cooling Pillowcase",
    description:
      "A breathable pillowcase concept for shoppers who want a fresher-feeling rest setup.",
    price: "$32 estimated",
    category: "Sleep environment",
    imagePlaceholder: "Folded cooling pillowcase",
    benefits: [
      "Helps create a calmer bedtime environment",
      "Simple upgrade for a nightly routine",
      "Designed for comfort-focused recovery habits"
    ],
    checkoutUrl: checkoutUrls.coolingPillowcase,
    howToUse: [
      "Use it as your regular pillowcase during your wind-down routine.",
      "Keep bedding simple and breathable where possible.",
      "Pair with dim lighting and a consistent evening cue."
    ],
    scienceNote:
      "A comfortable sleep environment can support better rest habits. This pillowcase is framed as a comfort tool, not as a medical or guaranteed sleep solution.",
    faqs: [
      {
        question: "What size is it?",
        answer:
          "Sizing will be finalized before ordering opens."
      },
      {
        question: "Is it meant to replace a routine?",
        answer:
          "No. It is one environment cue that can support a broader wind-down routine."
      }
    ]
  },
  {
    id: "prod_blue_light_glasses",
    slug: "blue-light-blocking-glasses",
    name: "Blue-Light Blocking Glasses",
    description:
      "Evening glasses concept for reducing bright screen exposure during late work or gaming sessions.",
    price: "$29 estimated",
    category: "Light control",
    imagePlaceholder: "Blue-light blocking glasses",
    benefits: [
      "Supports lower-light evening habits",
      "Useful for office workers, gamers, and programmers",
      "Pairs well with consistent wind-down cues"
    ],
    checkoutUrl: checkoutUrls.blueLightGlasses,
    howToUse: [
      "Wear during late screen sessions when avoiding screens is not realistic.",
      "Lower screen brightness and room lighting when possible.",
      "Use alongside a consistent stop-work or stop-gaming cue."
    ],
    scienceNote:
      "Evening light exposure can affect how ready people feel for bed. These glasses are presented as one practical light-management habit, without promising a medical outcome.",
    faqs: [
      {
        question: "Do these replace turning off screens?",
        answer:
          "No. They work best with practical screen boundaries, lower brightness, and calmer evening routines."
      },
      {
        question: "Are these for gamers and programmers?",
        answer:
          "Yes, they are positioned for people who spend long evenings around screens."
      }
    ]
  },
  {
    id: "prod_white_noise_machine",
    slug: "white-noise-machine",
    name: "White Noise Machine",
    description:
      "A compact sound machine concept designed to help reduce everyday noise distractions.",
    price: "$39 estimated",
    category: "Sleep environment",
    imagePlaceholder: "Compact white noise machine",
    benefits: [
      "Helps reduce distracting background noise",
      "Supports a more consistent rest environment",
      "Simple bedside-friendly setup"
    ],
    checkoutUrl: checkoutUrls.whiteNoiseMachine,
    howToUse: [
      "Place near your bed or rest area at a comfortable volume.",
      "Choose a sound that feels steady and non-distracting.",
      "Use it as part of the same wind-down sequence each night."
    ],
    scienceNote:
      "Consistent background sound can help mask everyday noise distractions for some people. This product supports environment setup and does not treat medical sleep issues.",
    faqs: [
      {
        question: "Does it block all noise?",
        answer:
          "No. It is intended to reduce distracting background noise, not eliminate every sound."
      },
      {
        question: "Can it be used during work breaks?",
        answer:
          "Yes, some people may use steady sounds for breaks or rest cues, depending on preference."
      }
    ]
  },
  {
    id: "prod_sleep_journal",
    slug: "sleep-journal",
    name: "Sleep Journal",
    description:
      "A simple guided journal concept for noticing patterns and building practical recovery habits.",
    price: "$18 estimated",
    category: "Routine",
    imagePlaceholder: "Guided sleep journal",
    benefits: [
      "Encourages reflection without overcomplicating bedtime",
      "Helps track routines, screens, and evening habits",
      "Beginner-friendly prompts for consistency"
    ],
    checkoutUrl: checkoutUrls.sleepJournal,
    howToUse: [
      "Answer one or two prompts before bed instead of trying to write a lot.",
      "Track screens, caffeine, stress, or routine cues in a simple way.",
      "Review patterns weekly and choose one small adjustment."
    ],
    scienceNote:
      "Journaling can make habits easier to notice and adjust. This journal is a practical reflection tool, not a diagnostic or medical product.",
    faqs: [
      {
        question: "Do I need to write every night?",
        answer:
          "No. The goal is a low-pressure habit that is useful when you can repeat it."
      },
      {
        question: "Is this a medical sleep tracker?",
        answer:
          "No. It is a simple routine journal and should not be used as medical guidance."
      }
    ]
  }
] as const;

export const productCategories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category)))
] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
