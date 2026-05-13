import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";
import { smallPrimaryButtonClass } from "@/lib/ui";

const supportLinks = [
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Contact", href: "/contact" }
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-linen/90 shadow-subtle backdrop-blur">
      <div className="border-b border-ink/10 bg-white/45">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 text-center text-xs font-semibold text-ink/58 sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <span>Responsible wellness tools. No exaggerated medical claims.</span>
          <nav aria-label="Support links" className="hidden gap-4 sm:flex">
            {supportLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 flex-col" aria-label={`${siteConfig.name} home`}>
            <span className="text-lg font-semibold tracking-normal text-ink">
              {siteConfig.name}
            </span>
            <span className="truncate text-xs font-medium text-ink/60">{siteConfig.kitName}</span>
          </Link>

          <Link
            href="/products/sleep-reset-kit"
            className={`shrink-0 lg:hidden ${smallPrimaryButtonClass}`}
          >
            View kit
          </Link>
        </div>

        <nav
          aria-label="Primary navigation"
          className="-mx-1 flex items-center gap-1 overflow-x-auto pb-1 lg:mx-0 lg:pb-0"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-ink/68 transition hover:bg-white/70 hover:text-ink focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/products/sleep-reset-kit"
          className={`hidden shrink-0 lg:inline-flex ${smallPrimaryButtonClass}`}
        >
          View kit
        </Link>
      </div>
    </header>
  );
}
