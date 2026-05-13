import Link from "next/link";
import { footerLinkGroups, siteConfig } from "@/lib/site";
import { secondaryButtonClass } from "@/lib/ui";

const footerTrustNotes = [
  "Responsible wellness language",
  "Clear policies before ordering",
  "Launch updates before checkout"
] as const;

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-linen/90">
      <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-ink/65 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.75fr]">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-ink">{siteConfig.name}</p>
            <p className="mt-2 leading-7">
              Tools for calmer rest routines and everyday recovery habits, built
              around practical sleep hygiene rather than medical promises.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/products/sleep-reset-kit" className={secondaryButtonClass}>
                View Sleep Reset Kit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full text-sm font-semibold text-ink transition hover:text-clay focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
              >
                Contact support
              </Link>
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinkGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="font-semibold text-ink">{group.title}</p>
                <div className="mt-3 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 border-t border-ink/10 pt-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-wrap gap-2">
            {footerTrustNotes.map((note) => (
              <span
                key={note}
                className="rounded-full border border-ink/10 bg-white/65 px-3 py-2 text-xs font-semibold text-ink/58"
              >
                {note}
              </span>
            ))}
          </div>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
