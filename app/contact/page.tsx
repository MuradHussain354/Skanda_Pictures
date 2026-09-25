import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact, studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Skanda Pictures",
  description: contact.lead,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <p className="font-sans text-xs uppercase tracking-wide2 text-gold">
        Contact
      </p>
      <h1 className="mt-4 font-display text-5xl leading-tight text-paper sm:text-6xl">
        {contact.heading}
      </h1>
      <p className="mt-5 max-w-md text-paper/70">{contact.lead}</p>

      <div className="mt-16 grid gap-14 border-t border-line pt-14 lg:grid-cols-[1fr,1.2fr]">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-display text-xl text-paper">Office</h2>
            <div className="mt-4 space-y-1 text-paper/70">
              <p>{studio.address.line1}</p>
              <p>{studio.address.line2}</p>
              <p>{studio.address.line3}</p>
              <p className="pt-2 text-sm text-muted">
                {studio.address.landmark}
              </p>
            </div>
          </div>

          {studio.email && (
            <div>
              <h2 className="font-display text-xl text-paper">Email</h2>
              <a
                href={`mailto:${studio.email}`}
                className="mt-4 block w-fit text-paper/70 underline decoration-line underline-offset-4 transition-colors hover:text-gold"
              >
                {studio.email}
              </a>
            </div>
          )}

          {studio.social.length > 0 && (
            <div>
              <h2 className="font-display text-xl text-paper">Follow</h2>
              <div className="mt-4 flex flex-col gap-2">
                {studio.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-paper/70 underline decoration-line underline-offset-4 transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
