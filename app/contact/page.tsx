import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { contactTopics } from "@/data/core-pages";
import { mutedCardClass } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rest Reset with product, order, or support questions."
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Questions before checkout goes live?"
      description="Send a product, support, or operations question before ordering opens."
    >
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className={mutedCardClass}>
          <h2 className="text-xl font-semibold text-ink">Common topics</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/68">
            {contactTopics.map((topic) => (
              <li key={topic} className="rounded-xl bg-white/75 p-3 shadow-subtle">
                {topic}
              </li>
            ))}
          </ul>
        </aside>

        <ContactForm />
      </div>
    </PageShell>
  );
}
