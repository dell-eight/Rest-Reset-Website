import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { returnsNotes } from "@/data/core-pages";
import { cardClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Refunds and Returns",
  description: "Refund and return information for Rest Reset."
};

export default function ReturnsPage() {
  return (
    <PageShell
      eyebrow="Refunds and returns"
      title="A clear return policy is part of a trustworthy store."
      description="These policy notes should be reviewed before checkout, payment, or fulfillment is enabled."
    >
      <div className="rounded-xl border border-dashed border-ink/20 bg-clay/12 p-5">
        <p className="font-semibold text-ink">Legal and operations review required.</p>
        <p className="mt-2 leading-7 text-ink/66">
          Finalize return eligibility, hygiene restrictions, refund timing, customer
          support steps, and supplier return rules before launch.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {returnsNotes.map((note) => (
          <article key={note.title} className={cardClass}>
            <h2 className="text-lg font-semibold text-ink">{note.title}</h2>
            <p className="mt-3 leading-7 text-ink/66">{note.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
