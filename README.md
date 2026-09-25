# Skanda Pictures — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included (current build)

- **Home** — animated hero ("Stories meet strategy."), Manjanathi featured prominently with the real approved key art, closing CTA
- **About** — the approved short write-up ("Stories Meet Strategy")
- **Production** — Manjanathi's full credits (writer-director, music, cast, producers, co-producer, presenter — pulled from the approved poster art), the approved key art, a first-look poster, the launch-ceremony photo, and a video slot ready for the launch video
- **Founder** — Sushant Prasad's full biography, with a photo slot ready for the final photograph
- **Contact** — office address, a working contact form (see below), and email/social slots that appear automatically once filled in
- **SEO/sharing** — `app/opengraph-image.tsx` generates the branded card shown when the site is shared on WhatsApp/X/Facebook; `app/sitemap.ts` and `app/robots.ts` are wired up for `skandapictures.com`

All site copy lives in `lib/content.ts` — edit it there rather than in the page files.

## Manjanathi artwork — what came from Drive

The shared Drive folder had two flattened exports usable on the web (the rest were oversized `.psb`/`.tif` source files):

- `public/images/manjanathi-poster.jpg` — the folklore/guitar key art, used as the main poster on Home and Production
- `public/images/manjanathi-firstlook.jpg` — the Mari Selvaraj title-reveal card, shown as a secondary "first-look poster" on the Production page

Credits (writer-director, music, producers, co-producer, presenter) were cross-checked against the text on the approved poster art itself, since it listed a fuller credit block than the earlier write-up — worth a quick check that `Divya Mari Selvaraj`, `Harsh Lalwani` (co-producer), and `Navvi Studios & Fortune Entertainment` (presenter) are all correct before this goes live.

There was also a 10×8 teaser card ("THE JOURNEY BEGINS TODAY") in the folder that was just over the size I could pull in — let me know if you want that one too and I'll fetch it separately.

## Contact form — connecting it to a real inbox

The form (`components/ContactForm.tsx`) is fully built and will submit correctly, but it needs one setting before it can deliver anywhere:

1. Go to [formspree.io](https://formspree.io), create a free account, and create a form pointed at the official inbox.
2. Formspree gives you an endpoint like `https://formspree.io/f/abcd1234`.
3. Add it as an environment variable — locally in `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcd1234
   ```
   and in Vercel: Project Settings → Environment Variables → add the same key/value, then redeploy.

Until that variable is set, the form still renders and validates normally but shows a small note instead of pretending to send. No code changes needed once you have the endpoint — just the env var.

(Formspree over a custom SMTP/Resend setup because it needs no server secrets in the repo and works immediately on Vercel — happy to switch to Resend or another provider if you'd prefer.)

## Still needed to finish this brief

- **Founder photograph** — set `founder.photo` in `lib/content.ts` to the image path (e.g. `/images/sushant-prasad.jpg`) once the file is available; the page will use it automatically instead of the placeholder monogram. Not in the Drive folder — needs to come from elsewhere.
- **Launch video** — set `launchVideo` on the Manjanathi entry in `lib/content.ts` to a file path (e.g. `/videos/manjanathi-launch.mp4`) or an external embed URL; a player appears on the Production page automatically once set. Also not in the Drive folder.
- **Official email address** — set `studio.email` in `lib/content.ts`.
- **Social links** — uncomment and fill in `studio.social` in `lib/content.ts`.
- **Formspree endpoint** — see above.

Upload the founder photo and launch video straight into the conversation (or add them to the Drive folder) and I'll drop them in and rebuild.

## Domain (skandapictures.com)

Connecting the domain itself is done in the Vercel dashboard (Project → Settings → Domains) once you're ready to publish — it's not something that lives in this codebase. The site is already set up with the domain in mind (`metadataBase`, sitemap, robots.txt all point at `https://skandapictures.com`), so no code changes will be needed at that point.

## Performance & mobile

Every page is statically pre-rendered at build time (confirmed via `npm run build` — all routes show `○ Static`), images are served through `next/image` (automatic resizing/compression), and there's no client-side data fetching on first load — so it loads fast by default on Vercel's CDN. Layout uses Tailwind's responsive utilities throughout (no fixed pixel widths), checked against mobile breakpoints.
