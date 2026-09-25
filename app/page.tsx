import Image from "next/image";
import Link from "next/link";
import HeroReveal from "@/components/HeroReveal";
import Sprocket from "@/components/Sprocket";
import { home, productions } from "@/lib/content";

export default function HomePage() {
  const current = productions[0];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/images/hero-texture.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.14]"
          />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-24 lg:grid-cols-[1fr,auto]">
          <HeroReveal />
          <Sprocket className="justify-self-end" />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <p className="font-sans text-xs uppercase tracking-wide2 text-gold">
            {home.nowFilmingKicker}
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-center">
            {current.poster ? (
              <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden border border-line">
                <Image
                  src={current.poster}
                  alt={`${current.title} key art`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="order-2 lg:order-1">
                <span className="border border-gold/50 px-2.5 py-1 font-sans text-[11px] uppercase tracking-wide2 text-gold">
                  {current.status}
                </span>
                <h2 className="mt-5 font-display text-5xl leading-tight text-paper sm:text-6xl">
                  {current.title}
                </h2>
                <p className="mt-5 max-w-md text-lg text-paper/80">
                  {current.synopsis}
                </p>
              </div>
            )}

            <div className={current.poster ? "" : "order-1 lg:order-2"}>
              {current.poster && (
                <>
                  <span className="border border-gold/50 px-2.5 py-1 font-sans text-[11px] uppercase tracking-wide2 text-gold">
                    {current.status}
                  </span>
                  <h2 className="mt-5 font-display text-5xl leading-tight text-paper sm:text-6xl">
                    {current.title}
                  </h2>
                  <p className="mt-5 max-w-md text-lg text-paper/80">
                    {current.synopsis}
                  </p>
                </>
              )}
              <p className="mt-6 max-w-md text-sm text-paper/60">
                Written and directed by {current.writerDirector}, with music
                by {current.music}. Starring{" "}
                {current.cast.slice(0, -1).join(", ")} and{" "}
                {current.cast[current.cast.length - 1]}.
              </p>
              <Link
                href="/production"
                className="mt-6 inline-block w-fit border-b border-gold pb-1 font-sans text-sm uppercase tracking-wide2 text-gold transition-opacity hover:opacity-70"
              >
                Full credits →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-10 sm:py-28">
          <h2 className="mx-auto max-w-lg font-display text-3xl leading-snug text-paper sm:text-4xl">
            {home.closing.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-paper/70">
            {home.closing.body}
          </p>
          <Link
            href={home.closing.cta.href}
            className="mt-8 inline-block border border-gold px-7 py-3 font-sans text-sm uppercase tracking-wide2 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            {home.closing.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
