import type { Metadata } from "next";
import Image from "next/image";
import CreditRow from "@/components/CreditRow";
import { productions } from "@/lib/content";

function toEmbedUrl(url: string) {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return null;
}

export const metadata: Metadata = {
  title: "Production — Skanda Pictures",
  description: "Manjanathi — a Skanda Pictures production, currently in production.",
};

export default function ProductionPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <p className="font-sans text-xs uppercase tracking-wide2 text-gold">
        Production
      </p>
      <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight text-paper sm:text-5xl">
        Now filming
      </h1>

      <div className="mt-14 flex flex-col gap-16">
        {productions.map((film) => (
          <article key={film.slug} className="border-t border-line pt-10">
            <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
              {film.poster ? (
                <div className="relative aspect-[2/3] w-full max-w-sm overflow-hidden border border-line">
                  <Image
                    src={film.poster}
                    alt={`${film.title} key art`}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3">
                    <span className="border border-gold/50 px-2.5 py-1 font-sans text-[11px] uppercase tracking-wide2 text-gold">
                      {film.status}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-4xl leading-tight text-paper sm:text-5xl">
                    {film.title}
                  </h2>
                  <p className="mt-4 max-w-md text-paper/70">
                    {film.synopsis}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/60">
                    {film.note}
                  </p>
                </div>
              )}

              <div>
                {film.poster && (
                  <div className="mb-6 flex items-center gap-3">
                    <span className="border border-gold/50 px-2.5 py-1 font-sans text-[11px] uppercase tracking-wide2 text-gold">
                      {film.status}
                    </span>
                  </div>
                )}
                {film.poster && (
                  <h2 className="mb-6 font-display text-4xl leading-tight text-paper sm:text-5xl">
                    {film.title}
                  </h2>
                )}
                <CreditRow label="Writer & Director" value={film.writerDirector} />
                <CreditRow label="Music" value={film.music} />
                <CreditRow label="Cast" value={film.cast.join(", ")} />
                <CreditRow label="Producers" value={film.producers.join(", ")} />
                <CreditRow label="Co-producer" value={film.coProducer} />
                <CreditRow label="Presented by" value={film.presenter} />
              </div>
            </div>

            <div className="mt-8 max-w-2xl">
              <p className="text-paper/70">{film.synopsis}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                {film.note}
              </p>
            </div>

            {film.firstLook && (
              <figure className="mx-auto mt-12 max-w-md">
                <div className="relative aspect-[1/2] w-full overflow-hidden border border-line">
                  <Image
                    src={film.firstLook}
                    alt={`${film.title} first-look poster`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center font-sans text-sm text-muted">
                  First-look poster
                </figcaption>
              </figure>
            )}
          </article>
        ))}
      </div>

      <figure className="mt-16 border-t border-line pt-16">
        <div className="relative mx-auto max-w-2xl border border-line">
          <Image
            src="/images/team-photo.jpg"
            alt="Mari Selvaraj, Ilaiyaraaja and Sushant Prasad at the Manjanathi launch ceremony"
            width={1100}
            height={1227}
            className="w-full"
          />
        </div>
        <figcaption className="mx-auto mt-4 max-w-2xl font-sans text-sm text-muted">
          From the Manjanathi launch ceremony — (L–R) writer-director Mari
          Selvaraj, composer Ilaiyaraaja and producer Sushant Prasad.
        </figcaption>
      </figure>

      {productions[0].launchVideo && (() => {
        const video = productions[0].launchVideo as string;
        const embed = toEmbedUrl(video);
        return (
          <div className="mx-auto mt-16 max-w-2xl border-t border-line pt-16">
            {embed ? (
              <div className="relative aspect-video w-full overflow-hidden border border-line">
                <iframe
                  src={embed}
                  title={`${productions[0].title} launch video`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video src={video} controls className="w-full border border-line" />
            )}
          </div>
        );
      })()}
    </section>
  );
}
