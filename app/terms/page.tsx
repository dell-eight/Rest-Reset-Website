import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { termsSections } from "@/data/core-pages";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service information for Rest Reset."
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms of service"
      title="Terms for using the Rest Reset website."
      description="These terms are pre-launch planning copy and should not be treated as final legal terms until reviewed."
    >
      <div className="rounded-lg border border-dashed border-ink/20 bg-clay/12 p-5">
        <p className="font-semibold text-ink">Legal review required.</p>
        <p className="mt-2 leading-7 text-ink/66">
          Final terms should reflect the real business entity, checkout provider,
          fulfillment model, customer support process, and applicable laws.
        </p>
      </div>
      <div className="mt-6 grid gap-4">
        {termsSections.map((section) => (
          <article key={section.title} className="rounded-lg border border-ink/10 bg-white/75 p-5">
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 leading-7 text-ink/66">{section.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
