import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { shippingNotes } from "@/data/core-pages";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Shipping information for Rest Reset."
};

export default function ShippingPage() {
  return (
    <PageShell
      eyebrow="Shipping"
      title="Shipping details will be finalized before launch."
      description="Exact timelines, carriers, and delivery regions will be confirmed before checkout goes live."
    >
      <div className="rounded-lg border border-dashed border-ink/20 bg-clay/12 p-5">
        <p className="font-semibold text-ink">Review shipping policy before launch.</p>
        <p className="mt-2 leading-7 text-ink/66">
          Confirm suppliers, delivery regions, processing times, tracking workflow, and
          customer notification requirements before accepting real orders.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {shippingNotes.map((note) => (
          <article key={note.title} className="rounded-lg border border-ink/10 bg-white/75 p-5">
            <h2 className="text-lg font-semibold text-ink">{note.title}</h2>
            <p className="mt-3 leading-7 text-ink/66">{note.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
