---
name: kova-scroll-art-direction
description: Create, critique, or refine Kova interfaces with punchy editorial art direction and choreographed scroll motion inspired by the supplied fashion, cyber-botanical, eco-collage, and retro Japanese poster references. Use for Kova landing pages, portfolios, campaign pages, interactive stories, hero sections, scroll-linked sequences, kinetic typography, image masks, experimental layouts, font selection, or any request to make the project feel artistic, brutalist, editorial, archival, fashion-forward, or less generic.
---

# Kova scroll art direction

Build a digital poster that happens to be a usable website. Preserve clarity at the task layer while making the composition confrontational, cropped, tactile, and alive.

## Load the visual language

1. Inspect all `assets/reference-*.png` images before making visual decisions.
2. Read `references/art-direction.md` for the fixed Kova design DNA.
3. Read `references/reference-modes.md` to select or combine a supplied poster direction.
4. Read `references/typography.md` before choosing or implementing fonts.
5. Read `references/scroll-choreography.md` before implementing motion.
6. Read `references/pinterest-field-notes.md` when researching, moodboarding, or proposing visual directions.

## Work in this order

### 1. Audit the project

- Inspect the existing framework, components, tokens, routes, assets, and package versions.
- Preserve working architecture and reuse existing primitives when they do not dilute the concept.
- Identify the real scroll root before adding listeners or observers.
- Use real product copy and assets when available. Do not fill a finished layout with generic placeholder cards.

### 2. Declare the concept

Write one sentence naming the visual tension, such as: `clinical catalog system invaded by fluorescent hand-cut masks.` Then specify:

```text
INTERACTION MODEL: scroll-driven | click-driven | time-driven | hover-driven | combined
TRIGGER: what changes the state
STATES: named visual beats
TRANSITION: what transforms between beats
REDUCED MOTION: the static equivalent
```

If the page cannot be described with a strong tension and three to six beats, simplify the idea before coding.

### 3. Storyboard the scroll

Treat each viewport as a poster spread. Give every beat one dominant act:

- Mask field opens to expose a face or product.
- Split image panels drift at different rates.
- Oversized words pin, crop, compress, or replace one another.
- Rotated metadata rails count chapters, dates, or progress.
- Rules, barcodes, issue numbers, and registration marks accumulate as navigation context.
- A hard color flip resets the pacing.

Use one continuous hero gesture and two or three secondary motifs. Do not animate every element independently.

### 4. Build the composition

- Establish color, type, spacing, borders, and motion as tokens.
- Choose one display face, one reading face, and optionally one metadata mono. Preserve an extreme but readable large/small scale contrast.
- Compose with grid lines, deliberate overflow, hard crops, vertical labels, and one focal image.
- Create irregular masks with SVG or `clip-path`; avoid default rounded rectangles.
- Keep functional controls obvious through contrast, placement, labels, and focus states.
- Preserve poster density on mobile by re-cropping and re-sequencing instead of collapsing everything into stacked cards.

### 5. Choreograph motion

- Prefer native scroll, CSS transforms, opacity, masks, and `requestAnimationFrame`-coalesced updates.
- Map sticky sequences to normalized progress and named states.
- Use IntersectionObserver only for one-time entrances.
- Animate `transform`, `opacity`, `clip-path`, or CSS variables; avoid layout-heavy hot paths.
- Make transitions decisive: 120–250ms for controls, 450–800ms for reveals, and longer only for a deliberate hero gesture.
- Implement `prefers-reduced-motion` as a designed state, not merely `animation: none`.

### 6. Art-direct the details

- Let type function as image: crop it, rotate it, repeat it, and let it collide with photography.
- Add tactile depth with restrained grain, scan lines, translucent plastic, halftone, or photocopy texture.
- Keep metadata tiny but intentional; keep essential content readable.
- Use asymmetry with a visible underlying grid. Randomness without structure is noise.
- Borrow mechanisms from references, never a full composition or distinctive artwork.

## Refuse generic output

Do not default to centered hero copy, pastel gradients, glass cards, uniform bento grids, pill-heavy navigation, floating blobs, stock dashboard patterns, or the same radius on every surface. Do not use `Inter` as the display voice unless the existing identity requires it. Do not add animation solely to prove that animation exists.

## Verify before handoff

- Capture the top, middle, and end of the experience at approximately 390px, 768px, and 1440px widths.
- Check every sticky boundary, scroll direction reversal, resize, refresh at a deep scroll position, and keyboard path.
- Confirm no accidental horizontal scroll, clipped essential copy, invisible focus, or overlapping controls.
- Test reduced motion, touch input, and a low-power/mobile viewport.
- Keep scroll work smooth by avoiding repeated layout reads and excessive composited layers.
- Compare the result against the chosen `assets/reference-*.png` set: it should share the visual grammar, not duplicate a poster.
