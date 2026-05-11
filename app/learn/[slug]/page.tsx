import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrustSection } from "@/components/TrustSection";
import { getArticleBySlug, learnArticles } from "@/data/learn";

type LearnArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return learnArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: LearnArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found"
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Rest Reset`,
      description: article.description,
      type: "article"
    }
  };
}

export default async function LearnArticlePage({ params }: LearnArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <article>
        <header className="border-b border-ink/10 bg-white/65">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 lg:py-16">
            <nav aria-label="Breadcrumb" className="text-sm font-medium text-ink/60">
              <Link href="/learn" className="transition hover:text-ink">
                Learn
              </Link>
              <span aria-hidden="true" className="px-2">
                /
              </span>
              <span className="text-ink">{article.title}</span>
            </nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-sage">
              {article.readTime}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">{article.description}</p>
            <p className="mt-4 text-sm font-medium text-ink/55">{article.audience}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6">
          <div className="rounded-lg border border-dashed border-ink/20 bg-clay/12 p-5">
            <p className="font-semibold text-ink">Responsible content note</p>
            <p className="mt-2 leading-7 text-ink/66">
              This article is educational and habit-focused. It is not medical advice
              and does not promise guaranteed sleep results.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-ink/68">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-lg border border-ink/10 bg-mist p-6">
            <h2 className="text-2xl font-semibold text-ink">Next steps</h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              {article.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-ink transition hover:bg-clay/15"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
      <TrustSection />
    </div>
  );
}
