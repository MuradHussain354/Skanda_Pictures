"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!ENDPOINT) {
      // No inbox connected yet — see README "Contact form" section.
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/40 px-6 py-8 font-display text-xl text-paper">
        Thank you — your message has been sent. We'll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Field label="Name" name="name" />
      <Field label="Email" name="email" type="email" />
      <div>
        <label
          htmlFor="message"
          className="font-sans text-xs uppercase tracking-wide2 text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border-b border-line bg-transparent py-2 font-sans text-paper outline-none transition-colors focus:border-gold"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit border border-gold px-7 py-3 font-sans text-sm uppercase tracking-wide2 text-gold transition-colors hover:bg-gold hover:text-ink disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-ember">
          {ENDPOINT
            ? "Something went wrong sending that — please try again, or email us directly."
            : "The contact form isn't connected to an inbox yet."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-sans text-xs uppercase tracking-wide2 text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full border-b border-line bg-transparent py-2 font-sans text-paper outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
