"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { home } from "@/lib/content";

const line = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  show: (i: number) => ({
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroReveal() {
  return (
    <div>
      <motion.p
        initial="hidden"
        animate="show"
        custom={0.05}
        variants={fade}
        className="max-w-md text-sm text-muted"
      >
        {"Independent film production, based in Chennai."}
      </motion.p>

      <h1 className="mt-6 font-display text-6xl leading-[1.03] text-paper sm:text-7xl lg:text-8xl">
        {home.heroLines.map((l, i) => (
          <motion.span
            key={l}
            custom={i}
            initial="hidden"
            animate="show"
            variants={line}
            className="block overflow-hidden text-balance"
          >
            {l}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial="hidden"
        animate="show"
        custom={0.75}
        variants={fade}
        className="mt-8 max-w-md text-lg text-paper/80"
      >
        {home.heroSub}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        custom={0.95}
        variants={fade}
        className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
      >
        <Link
          href={home.primaryCta.href}
          className="border border-gold px-7 py-3 font-sans text-sm uppercase tracking-wide2 text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          {home.primaryCta.label}
        </Link>
        <Link
          href={home.secondaryCta.href}
          className="font-sans text-sm uppercase tracking-wide2 text-paper/70 underline decoration-line underline-offset-4 transition-colors hover:text-paper"
        >
          {home.secondaryCta.label}
        </Link>
      </motion.div>
    </div>
  );
}
