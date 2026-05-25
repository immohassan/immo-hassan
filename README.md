# Hassan — Portfolio

A minimal, editorial portfolio site for a Process Automation Engineer & Full Stack Developer. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Design language: dark, typographic, generous whitespace — inspired by [lessestudio.com](https://lessestudio.com/).

## Highlights

- **Hero** — staggered word-reveal on load, large display serif headline.
- **Selected Work** — editorial list with hover underline reveal.
- **Why Me** — features a cursor-reactive **liquid mask reveal** image component built with SVG `feTurbulence` + `feDisplacementMap` for an organic blob edge that follows the cursor and shrinks on leave. Includes subtle parallax on the revealed image.
- **Process / Services / Testimonials / Experience / Tech Stack / Contact** — scroll-triggered fade-ins using Framer Motion's `whileInView`.
- All copy lives in [`lib/data.ts`](lib/data.ts) for easy editing.

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- `next/font` — Playfair Display (serif) + Inter (sans)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint
```

## Project structure

```
app/
  layout.tsx            # fonts + root html
  page.tsx              # composes all sections
  globals.css           # tailwind + base styles
components/
  Navbar.tsx
  Hero.tsx
  Work.tsx
  WhyMe.tsx             # uses HoverMaskReveal
  HoverMaskReveal.tsx   # the liquid cursor mask component
  HowIBuild.tsx
  Services.tsx
  Testimonials.tsx
  Experience.tsx
  TechStack.tsx
  Contact.tsx
  Footer.tsx
  SectionHeading.tsx
lib/
  data.ts               # all site copy
```

## The HoverMaskReveal component

`components/HoverMaskReveal.tsx` accepts:

| Prop             | Type     | Default | Notes                                          |
| ---------------- | -------- | ------- | ---------------------------------------------- |
| `frontImage`     | `string` | —       | Image always visible.                          |
| `backImage`      | `string` | —       | Image revealed inside the blob mask.           |
| `size`           | `number` | `200`   | Blob radius in px at full reveal.              |
| `returnDuration` | `number` | `0.6`   | Seconds for the blob to retract on mouse leave.|
| `parallax`       | `number` | `0.04`  | Parallax intensity (0–1) for the back image.   |
| `alt`            | `string` | `""`    | Alt text for the front image.                  |

How it works: two stacked images. The back image is hidden behind an SVG `<mask>` containing a `<circle>` that follows the cursor. The mask circle passes through an `feDisplacementMap` driven by `feTurbulence`, distorting the circle's edge into an organic, animated blob. A `requestAnimationFrame` loop eases the blob's position and radius toward the pointer, and the turbulence `seed` is jittered while visible for an extra liquid feel. On `pointerleave`, target radius drops to 0 and the loop shrinks linearly over `returnDuration`.

## Customising

- **Copy** — edit `lib/data.ts`.
- **Photos** — replace the placeholders in `lib/data.ts` (`whyMe.frontImage`, `whyMe.backImage`) with real image URLs or `/public` paths.
- **Colours** — tweak the palette in [`tailwind.config.ts`](tailwind.config.ts) (`ink`, `bone`, `muted`, `line`).
- **Fonts** — swap the `next/font` imports in [`app/layout.tsx`](app/layout.tsx).

## License

Personal use.
