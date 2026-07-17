# Kova art direction

## Canonical read of the reference family

The original reference combines fluorescent poster brutalism with fashion-editorial image treatment. The added references expand the same high-contrast editorial logic into cyber-botanical noir, photocopied ecological collage, and retro Japanese travel modernism. Read the detailed modes in `reference-modes.md`; use this file for their shared design DNA.

The style is not merely “bright brutalism.” Its tension comes from five oppositions:

1. Organic mask versus strict catalog grid.
2. Intimate face versus impersonal production metadata.
3. Fluorescent flat color versus tactile, imperfect photography.
4. Huge compressed display type versus nearly microscopic labels.
5. Controlled Swiss structure versus punk interruption.

## Visual DNA

### Palette

Use a narrow palette with one fluorescent field doing most of the work.

```css
:root {
  --kova-acid: #f3ff00;
  --kova-ink: #0a0a08;
  --kova-paper: #f3f0e8;
  --kova-plastic: rgba(255, 255, 255, 0.34);
  --kova-rule: rgba(10, 10, 8, 0.28);
}
```

Allow one contextual accent only when content needs it: signal orange, ultraviolet, or cold cyan. Never distribute several accents evenly.

### Typography

- Pair a condensed grotesk display face with a neutral grotesk and a technical mono.
- Set display type at `clamp(4rem, 15vw, 13rem)` with line-height from `0.76` to `0.9`.
- Use condensed all-caps for short statements, issue numbers, and verbs—not paragraphs.
- Use the mono for dates, coordinates, chapter counters, file names, and production notes.
- Crop display type at viewport edges and behind masks. Never crop task-critical copy.
- Rotate secondary labels 90 degrees when they reinforce the grid; do not rotate prose.

Favor typefaces with real personality and appropriate licensing. If no brand font exists, explore families in the vein of Archivo Narrow, Bebas Neue, League Gothic, IBM Plex Mono, Space Mono, or a sharper licensed display face. Do not assume these exact fonts are installed.

Use `typography.md` for approved open-font pairings, Japanese-script coverage, sizing, and implementation rules.

### Composition

- Start with a 12-column desktop grid and a 4-column mobile grid, then violate it intentionally.
- Make one element occupy 55–80% of the first viewport.
- Place supporting information on edges, seams, and axes rather than in conventional card headers.
- Use hard panel splits, overlapping image crops, visible alignment rules, and abrupt scale jumps.
- Maintain one quiet region so the loud region can feel louder.
- Prefer square or nearly square controls with generous touch targets; use rounding only as a pointed contrast.

### Image treatment

- Favor close portraits, skin, material, garments, reflective surfaces, and cropped gestures.
- Use irregular SVG masks resembling petals, punched paper, liquid voids, or torn apertures.
- Combine a clean source image with one tactile layer: plastic wrap, scanner noise, halftone, grain, or photocopy bloom.
- Let masks reveal meaning over time. The mask should be part of the narrative, not decoration pasted on top.
- Maintain enough facial and subject integrity to avoid accidental grotesquery unless the concept calls for it.

### Interface notation

Use catalog language as functional navigation:

- `01/05`, `NO. 163`, timestamps, coordinates, or chapter codes for progress.
- Barcode-like rule clusters for section boundaries or loading state.
- Registration circles and crop marks for interactive targets or anchors.
- Vertical edge rails for persistent location context.

Never add meaningless pseudo-technical text. Every label must correspond to content, navigation, or system state.

## Responsive behavior

- Recompose rather than shrink. Change crop, rotation, and reading order at each breakpoint.
- On mobile, let the image become the field, move metadata to two edge rails, and keep one oversized word cropped across the fold.
- Ensure 44px minimum pointer targets and keep essential labels horizontal when space is tight.
- Keep the focal gesture, fluorescence, and scale contrast intact even when secondary ornament disappears.

## Anti-slop test

Reject a design if three or more are true:

- It could be mistaken for a generic AI startup landing page.
- The hero is centered inside a rounded container.
- Every section has the same rhythm and padding.
- Photography is used only as rectangular card thumbnails.
- Motion consists only of uniform fade-ups.
- Decorative text has no information function.
- The mobile view becomes a polite stack of identical cards.
- The fluorescent color is reduced to small button accents.
