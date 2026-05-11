import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div>
      <section className="border-b border-ink/10 bg-white/65">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{description}</p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
}
