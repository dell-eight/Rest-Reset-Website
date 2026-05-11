import Link from "next/link";
import { footerLinkGroups, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-ink/65 sm:px-6 md:grid-cols-[1.3fr_2fr] lg:px-8">
        <div className="max-w-sm">
          <p className="font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-1">Tools for calmer rest routines and everyday recovery habits.</p>
          <p className="mt-5">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="font-semibold text-ink">{group.title}</p>
              <div className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-ink">
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
