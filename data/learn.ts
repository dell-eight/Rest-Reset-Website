export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  readTime: string;
  sections: readonly {
    heading: string;
    body: readonly string[];
  }[];
  relatedLinks: readonly {
    label: string;
    href: string;
  }[];
};

export const learnArticles: readonly LearnArticle[] = [
  {
    slug: "sleep-hygiene-basics-screen-heavy-workers",
    title: "Sleep hygiene basics for screen-heavy workers",
    description:
      "A practical guide to light, noise, timing, and wind-down cues for people who spend long days around screens.",
    audience: "Office workers, remote workers, programmers, and gamers",
    readTime: "5 min read",
    sections: [
      {
        heading: "Start with your environment",
        body: [
          "Sleep hygiene is a set of habits and environment choices that can support a more consistent rest routine. It is not a quick fix or a medical treatment.",
          "For screen-heavy workers, the easiest place to start is the environment: lower room brightness, reduce noisy distractions where possible, and keep your wind-down tools visible."
        ]
      },
      {
        heading: "Treat light like a cue",
        body: [
          "Bright light and intense screens can make evenings feel more alert. A practical routine can include dimmer lighting, fewer late notifications, and a clear point when work or gaming starts to wind down.",
          "If avoiding screens is unrealistic, aim for lower brightness and calmer activities before bed rather than chasing a perfect routine."
        ]
      },
      {
        heading: "Keep the routine repeatable",
        body: [
          "A routine works best when it is simple enough to repeat on a normal weeknight. One small cue, such as putting on an eye mask or writing one line in a sleep journal, can make the transition feel more intentional.",
          "Rest Reset products are designed to support these habits without promising guaranteed sleep outcomes."
        ]
      }
    ],
    relatedLinks: [
      { label: "View the Sleep Reset Kit", href: "/products/sleep-reset-kit" },
      { label: "Read the FAQ", href: "/faq" }
    ]
  },
  {
    slug: "simple-bedtime-routine",
    title: "How to build a simple bedtime routine",
    description:
      "A beginner-friendly routine framework built around fewer decisions, calmer cues, and realistic consistency.",
    audience: "Anyone who wants a calmer evening routine",
    readTime: "4 min read",
    sections: [
      {
        heading: "Choose a small starting point",
        body: [
          "A useful bedtime routine does not need to be elaborate. Start with one reliable action that tells your day to slow down, such as dimming lights, preparing your sleep mask, or writing a short note.",
          "The goal is consistency, not perfection. A routine that takes five minutes and actually happens is more useful than one that only works on ideal nights."
        ]
      },
      {
        heading: "Reduce friction",
        body: [
          "Put your wind-down tools where you can see them. Keep the journal by your bed, set routine cards near your desk, and make it easy to reduce light and noise distractions.",
          "When the tools are easy to reach, the routine asks for less willpower at the end of a tiring day."
        ]
      },
      {
        heading: "Use the same order",
        body: [
          "Repeating the same order can help a routine feel familiar: lower lights, reduce screens, set up your environment, write a quick note, then rest.",
          "This kind of structure supports healthier habits, but it should not be treated as medical advice."
        ]
      }
    ],
    relatedLinks: [
      { label: "Shop routine tools", href: "/products" },
      { label: "Get support", href: "/contact" }
    ]
  },
  {
    slug: "recovery-tools-office-workers-gamers",
    title: "Recovery tools for tired office workers and gamers",
    description:
      "How simple light, sound, comfort, and reflection tools can support recovery habits after screen-heavy days.",
    audience: "Office workers, programmers, gamers, and young professionals",
    readTime: "6 min read",
    sections: [
      {
        heading: "Screen-heavy days need a transition",
        body: [
          "Long work sessions and late gaming can make it hard to shift from alert mode into a calmer evening. Recovery habits create a bridge between the screen and the rest of the night.",
          "That bridge can be simple: reduce bright inputs, lower noise distractions, and use a few physical cues that signal a change in pace."
        ]
      },
      {
        heading: "Pick tools by job",
        body: [
          "An eye mask supports light control. Earplugs or a white noise machine can reduce sound distractions. A cooling pillowcase supports comfort. A journal helps you notice patterns without turning bedtime into a project.",
          "None of these tools needs to do everything. The best setup is the one that makes your routine easier to repeat."
        ]
      },
      {
        heading: "Avoid big promises",
        body: [
          "Responsible recovery products should not promise to cure sleep issues or guarantee results. They can support better routines, calmer environments, and more intentional habits.",
          "If sleep problems are ongoing or severe, a qualified healthcare professional is the right place to seek medical guidance."
        ]
      }
    ],
    relatedLinks: [
      { label: "Compare products", href: "/products" },
      { label: "Shipping information", href: "/shipping" }
    ]
  }
] as const;

export function getArticleBySlug(slug: string) {
  return learnArticles.find((article) => article.slug === slug);
}
