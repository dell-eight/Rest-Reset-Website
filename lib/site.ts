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
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" }
] as const;

export const footerLinkGroups = [
  {
    title: "Shop",
    links: [
      { label: "Products", href: "/products" },
      { label: "Sleep Reset Kit", href: "/products/sleep-reset-kit" },
      { label: "Learn", href: "/learn" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Shipping", href: "/shipping" }
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
