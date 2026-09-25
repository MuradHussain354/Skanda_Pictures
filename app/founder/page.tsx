import type { Metadata } from "next";
import Image from "next/image";
import Monogram from "@/components/Monogram";
import { founder } from "@/lib/content";

export const metadata: Metadata = {
  title: "Founder — Skanda Pictures",
  description: founder.lead,
};

export default function FounderPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[1fr,1.3fr] lg:items-start">
        {founder.photo ? (
          <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-line">
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <Monogram letters="SP" />
        )}

        <div>
          <p className="font-sans text-xs uppercase tracking-wide2 text-gold">
            {founder.role}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-paper sm:text-6xl">
            {founder.name}
          </h1>
          <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-paper/90">
            {founder.lead}
          </p>

          <div className="mt-8 flex max-w-xl flex-col gap-5 border-t border-line pt-8 text-paper/70">
            {founder.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
