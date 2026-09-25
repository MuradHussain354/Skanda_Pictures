import type { Metadata } from "next";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Skanda Pictures",
  description: about.paragraphs[0],
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <h1 className="max-w-2xl font-display text-4xl leading-tight text-paper sm:text-5xl lg:text-6xl">
        {about.heading}
      </h1>

      <div className="mt-14 flex max-w-2xl flex-col gap-6 border-t border-line pt-14">
        {about.paragraphs.map((p, i) => (
          <p
            key={p.slice(0, 24)}
            className={
              i === 0
                ? "font-display text-2xl leading-snug text-paper sm:text-3xl"
                : "text-paper/70"
            }
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
