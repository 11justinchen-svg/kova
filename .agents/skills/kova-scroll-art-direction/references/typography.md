# Kova typography system

Use typography as the main contrast engine: one enormous voice, one compact reading voice, and one optional technical voice. Load only the families and weights the chosen direction needs.

## Approved open-font pool

The linked Google Fonts repository directories include font files and OFL license files. Confirm the current license before bundling or modifying a font.

### Monumental Latin display

- [Bebas Neue](https://github.com/google/fonts/tree/main/ofl/bebasneue) — tall, blunt, compact; closest fit for the Tokyo title and acid poster's compressed monuments.
- [League Gothic](https://github.com/google/fonts/tree/main/ofl/leaguegothic) — narrower and more editorial; strong for vertical lockups, huge chapter words, and kinetic replacement.
- [Barlow Condensed](https://github.com/google/fonts/tree/main/ofl/barlowcondensed) — wider weight range and a less poster-specific voice; useful when display and short supporting text must share a family.
- [Archivo Black](https://github.com/google/fonts/tree/main/ofl/archivoblack) — heavy neo-grotesk with broad lowercase forms; best match for the photocopied `nature / beautiful` scale.

### Japanese and bilingual display

- [Dela Gothic One](https://github.com/google/fonts/tree/main/ofl/delagothicone) — very heavy Japanese/Latin display face; use for a few large glyphs in cyber-botanical compositions.
- [Noto Sans JP](https://github.com/google/fonts/tree/main/ofl/notosansjp) — broad Japanese coverage and multiple weights; use for Japanese body copy, labels, and a more neutral bold display.

Do not fake Japanese atmosphere with random glyphs. Write meaningful copy, set the correct language, and request native review for public-facing work.

### Reading and metadata

- [IBM Plex Sans Condensed](https://github.com/google/fonts/tree/main/ofl/ibmplexsanscondensed) — compact editorial body and captions that can sit beside oversized type.
- [IBM Plex Mono](https://github.com/google/fonts/tree/main/ofl/ibmplexmono) — dates, coordinates, progress, technical rails, and catalog notation.
- Use Noto Sans JP for Japanese microcopy rather than forcing a Latin mono across unsupported glyphs.

## Direction-specific pairings

### Acid fashion archive

`League Gothic` or `Bebas Neue` display + `IBM Plex Sans Condensed` body + `IBM Plex Mono` metadata.

### Cyber-botanical terminal

`Dela Gothic One` Japanese display + `Noto Sans JP` body/labels + `IBM Plex Mono` for Latin and numeric diagnostics.

### Photocopied field journal

`Archivo Black` display + `IBM Plex Sans Condensed` body + `IBM Plex Mono` for occasional coordinates. Add ink spread as an image/texture treatment, not a blur on live text.

### Retro travel monument

`Bebas Neue` or `Barlow Condensed Black` Latin display + `Noto Sans JP Black` Japanese title + `IBM Plex Sans Condensed` body.

## Scale contrast

```css
:root {
  --font-display: "League Gothic", "Arial Narrow", sans-serif;
  --font-reading: "IBM Plex Sans Condensed", Arial, sans-serif;
  --font-meta: "IBM Plex Mono", ui-monospace, monospace;

  --type-monument: clamp(5.5rem, 18vw, 17rem);
  --type-display: clamp(3.25rem, 9vw, 8rem);
  --type-body: clamp(1rem, 1.15vw, 1.2rem);
  --type-caption: clamp(.75rem, .82vw, .875rem);
  --type-micro: clamp(.6875rem, .68vw, .75rem);
}

.type-monument {
  font-family: var(--font-display);
  font-size: var(--type-monument);
  line-height: .78;
  letter-spacing: -.025em;
  text-transform: uppercase;
}

.type-micro {
  font-family: var(--font-meta);
  font-size: var(--type-micro);
  line-height: 1.3;
  letter-spacing: .035em;
}
```

- Aim for roughly a 10:1 to 18:1 visual size contrast between monumental and metadata type.
- Keep functional microtype at least 11px; prefer 12px on mobile or textured backgrounds.
- Use weight 500–600 for very small text and keep its contrast high.
- Limit each page to two families plus an optional mono.
- Use negative tracking only on large display text. Keep small text at normal or slightly positive tracking.
- Keep live text crisp; apply grain, halftone, or ink bleed through overlays or raster title treatments with accessible text equivalents.

## Loading discipline

- Self-host production fonts when privacy, consistency, and performance matter.
- Subset Latin families when tooling and licensing permit; load Japanese subsets carefully because glyph coverage is much larger.
- Preload only the primary above-the-fold WOFF2 file.
- Use `font-display: swap` and metric-compatible fallbacks where possible.
- Test title crops after the actual font loads; condensed faces can change line breaks dramatically.

