import Link from "next/link";
import type { LearnArticle } from "@/data/learn";
import { interactiveCardClass, textLinkClass } from "@/lib/ui";

type ArticleCardProps = {
  article: LearnArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className={`flex h-full flex-col ${interactiveCardClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
        {article.readTime}
      </p>
      <h2 className="mt-3 text-xl font-semibold text-ink">{article.title}</h2>
      <p className="mt-3 leading-7 text-ink/66">{article.description}</p>
      <p className="mt-4 text-sm font-medium text-ink/55">{article.audience}</p>
      <Link
        href={`/learn/${article.slug}`}
        className={`mt-auto pt-6 ${textLinkClass}`}
      >
        Read article
      </Link>
    </article>
  );
}
