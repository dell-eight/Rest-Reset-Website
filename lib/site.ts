export const siteConfig = {
  name: "Rest Reset",
  kitName: "Sleep Reset Kit",
  tagline: "Science-backed recovery tools for tired modern workers.",
  description:
    "Simple science-backed sleep and recovery tools for tired office workers, gamers, and young professionals.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001",
  catalogUrl: "/products",
  checkoutUrl: "#email-capture"
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Learn", href: "/learn" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" }
] as const;

export const footerLinkGroups = [
  {
    title: "Shop",
    links: [
      { label: "Sleep Reset Kit", href: "/products/sleep-reset-kit" },
      { label: "All products", href: "/products" },
      { label: "Launch list", href: "/products/sleep-reset-kit#email-capture" }
    ]
  },
  {
    title: "Learn",
    links: [
      { label: "Education hub", href: "/learn" },
      { label: "Sleep hygiene basics", href: "/learn/sleep-hygiene-basics-screen-heavy-workers" },
      { label: "Bedtime routine guide", href: "/learn/simple-bedtime-routine" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" },
      { label: "About", href: "/about" }
    ]
  },
  {
    title: "Policies",
    links: [
      { label: "Refunds and returns", href: "/returns" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" }
    ]
  }
] as const;
