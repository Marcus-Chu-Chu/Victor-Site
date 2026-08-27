# Victor Starkov — personal site

Next.js 16 (App Router) + React 19 + Tailwind v4. Light mode only, no external
runtime dependencies.

## Run it

```bash
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build` (production build), `npm start` (serve the build).

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/profile.ts` | **All site content.** Roles, education, evidence rows, case studies, toolkit, credentials. Edit here, not in the pages. |
| `src/app/globals.css` | Design tokens (OKLCH colour ramps, type scale, easing, z-scale) and the component layer. |
| `src/app/*/page.tsx` | The five routes: `/`, `/about`, `/journey`, `/portfolio`, `/contact`. |
| `src/components/` | Header, footer, hero canvas, journey rail, trajectory chart, tick marks, reveal system. |
| `public/` | The downloadable profile PDF. |

## Design notes

- **Palette**: cobalt as the voice, marigold as the counterweight, violet and
  teal as chapter markers, on pure white. Every foreground/background pair used
  for text is verified at ≥ 4.5:1 (WCAG AA).
- **Type**: Archivo (variable weight *and* width — display sits at `wdth 108–112`)
  paired with Azeret Mono for the numeric/label layer.
- **Motion**: the reveal system in `globals.css` hides elements only under
  `[data-motion="ready"]`, which an inline bootstrap script sets before first
  paint and removes again after 4s if React never hydrates. The page can never
  ship blank. Everything collapses under `prefers-reduced-motion: reduce`.

## Adding a headshot

`src/components/monogram-plate.tsx` renders the typographic mark that stands in
for a portrait. Replace the middle `<div>` with a `next/image` and keep the
plate frame and the two caption rows.

## Publishing case studies

Entries live in `caseStudies` in `src/lib/profile.ts`. Each has a `status` of
`drafting`, `in-review`, or `planned`, which drives the chip on `/portfolio`.
When a write-up is ready, give it its own route and link the card to it.
