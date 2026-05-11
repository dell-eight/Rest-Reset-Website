import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { privacySections } from "@/data/core-pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Rest Reset."
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy policy"
      title="Privacy information for Rest Reset."
      description="This policy text is practical pre-launch guidance and does not claim final legal compliance. It must be reviewed before launch."
    >
      <div className="rounded-lg border border-dashed border-ink/20 bg-clay/12 p-5">
        <p className="font-semibold text-ink">Legal review required.</p>
        <p className="mt-2 leading-7 text-ink/66">
          Review this page with qualified legal guidance after analytics, email capture,
          checkout, and support tools are selected.
        </p>
      </div>
      <div className="mt-6 grid gap-4">
        {privacySections.map((section) => (
          <article key={section.title} className="rounded-lg border border-ink/10 bg-white/75 p-5">
            <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
            <p className="mt-3 leading-7 text-ink/66">{section.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
