import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Shared wrapper so every section has the same spacing and heading style.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
