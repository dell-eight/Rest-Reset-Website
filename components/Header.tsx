import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-ink/10 bg-mist/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col" aria-label={`${siteConfig.name} home`}>
            <span className="text-lg font-semibold tracking-normal text-ink">
              {siteConfig.name}
            </span>
            <span className="text-xs font-medium text-ink/60">{siteConfig.kitName}</span>
          </Link>

          <Link
            href={siteConfig.catalogUrl}
            className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
          >
            View kit
          </Link>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
