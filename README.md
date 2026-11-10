# Lonchería El Parian · demo site

Sales demo for the three El Parian taco trucks in Southwest Detroit. Mobile first, no backend.

- Next.js 15 (App Router), React 19, hand-written CSS (Tailwind v4 is only the reset)
- Fonts: Bowlby One, Figtree, Caveat Brush (next/font/google)
- Everything editable lives in `src/lib/content.ts`
- Notable bits: a three-truck picker with live open/closed status and a map per location (`Locations.tsx`), an animated al pastor spit in SVG, a catering planner (`Taquiza.tsx`)

```bash
npm install
npm run dev -- -p 3120        # http://localhost:3120
PAGES=1 npm run build         # static export for GitHub Pages into .next-pages
```

Do not run `npm run build` while the dev server is running; it corrupts `.next`. Stop dev, delete `.next`, restart.

See `PLACEHOLDERS.md` for what is verified and what still needs the owners.
