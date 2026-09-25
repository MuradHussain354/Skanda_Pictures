import Image from "next/image";
import Link from "next/link";
import { nav, studio } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3 sm:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.jpg"
              alt=""
              width={32}
              height={50}
              className="h-8 w-auto rounded-sm"
            />
            <p className="font-display text-xl">
              <span className="text-paper">Skanda</span>{" "}
              <span className="text-gold">Pictures</span>
            </p>
          </div>
          <p className="mt-3 max-w-[24ch] text-sm text-muted">
            {studio.category}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit font-sans text-sm text-paper/75 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-sm text-muted">
          <p>{studio.address.line1}</p>
          <p>{studio.address.line2}</p>
          <p>{studio.address.line3}</p>
          {studio.email && (
            <a
              href={`mailto:${studio.email}`}
              className="mt-3 block w-fit text-paper/75 transition-colors hover:text-gold"
            >
              {studio.email}
            </a>
          )}
          {studio.social.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {studio.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/75 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-line px-6 py-5 text-center font-sans text-xs uppercase tracking-wide2 text-muted sm:px-10">
        © {new Date().getFullYear()} Skanda Pictures. All rights reserved.
      </div>
    </footer>
  );
}
