import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { PageShell } from "@/components/PageShell";
import { TrustSection } from "@/components/TrustSection";
import { learnArticles } from "@/data/learn";
import { darkPanelClass, inverseButtonClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Practical sleep hygiene and recovery habit articles for screen-heavy workers, gamers, and young professionals.",
  openGraph: {
    title: "Learn | Rest Reset",
    description:
      "Responsible education about sleep routines, light exposure, recovery tools, and calmer evenings."
  }
};

export default function LearnPage() {
  return (
    <div>
      <PageShell
        eyebrow="Learn"
        title="Practical education for calmer rest routines."
        description="No hype, no invented citations, and no medical promises. These guides explain simple sleep hygiene and recovery habits for screen-heavy modern life."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {learnArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <section className={`mt-10 ${darkPanelClass}`}>
          <h2 className="text-2xl font-semibold">Start with the main routine kit</h2>
          <p className="mt-3 max-w-2xl leading-7 text-white/72">
            The Sleep Reset Kit brings together simple tools for reducing distractions,
            building wind-down cues, and keeping recovery habits easier to repeat.
          </p>
          <Link
            href="/products/sleep-reset-kit"
            className={`mt-5 ${inverseButtonClass}`}
          >
            View Sleep Reset Kit
          </Link>
        </section>
      </PageShell>
      <TrustSection />
    </div>
  );
}
