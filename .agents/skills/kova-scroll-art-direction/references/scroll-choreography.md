# Scroll choreography

## Motion character

Kova motion is punchy, editorial, and mechanical with occasional elastic release. It should feel like a printing press, scanner bed, contact sheet, or poster wall being rearranged—not like floating presentation software.

## Recommended sequence

### Beat 0 — impact

Fill the viewport with the fluorescent mask. Expose only a narrow photographic aperture and a clipped title fragment. Keep this state legible without motion.

### Beat 1 — aperture

As progress reaches roughly 0.08–0.32, expand or translate mask lobes to reveal the eye or product. Move the photo at 15–25% of the mask speed for depth. Pin the issue label.

### Beat 2 — split

At 0.32–0.58, create a hard horizontal or vertical seam. Let two crops of the same image move at different rates. Rotate a condensed phrase into the seam and replace words decisively at named thresholds.

### Beat 3 — catalog

At 0.58–0.82, accumulate useful metadata: chapter count, date, category, or progress. A rule cluster or barcode can grow with progress. Keep ornament subordinate to the focal message.

### Beat 4 — release

At 0.82–1, remove the mask or flip the color field. Restore a quieter reading surface for the next content section.

## Progress model

Use a tall outer section with a sticky viewport. Normalize progress once and drive CSS custom properties from it.

```ts
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

function sectionProgress(section: HTMLElement, scrollRoot: HTMLElement) {
  const rootRect = scrollRoot.getBoundingClientRect();
  const rect = section.getBoundingClientRect();
  const travel = section.offsetHeight - scrollRoot.clientHeight;
  return clamp01((rootRect.top - rect.top) / Math.max(1, travel));
}
```

Coalesce visual writes into one animation frame:

```ts
let frame = 0;
const update = () => {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    const p = sectionProgress(section, root);
    section.style.setProperty('--progress', p.toFixed(4));
  });
};

root.addEventListener('scroll', update, { passive: true });
```

Measure on load and resize; avoid `getBoundingClientRect()` for many elements on every scroll tick. If the page uses window scrolling, adapt the calculation to the document root rather than introducing a custom scroll container.

## Signature effects

### Mask aperture

Animate SVG mask geometry, a stepped `clip-path`, or the translation/scale of separate lobes. Prefer a small number of large shapes to dozens of particles. Provide a static open-mask state for reduced motion.

### Kinetic type lockup

Pin one phrase and swap only one word at discrete progress bands. Combine a condensed display word with a smaller horizontal qualifier. Instant swaps or 120ms shutters feel sharper than long crossfades.

### Split-image parallax

Use two overflow-hidden panels containing the same source image. Offset `object-position` and translate each inner image at a different rate. Keep the face or product aligned at one meaningful seam.

### Metadata rail

Pin a vertical rail at an edge. Update its chapter number and progress with text, not purely decorative marks. Keep the rail keyboard- and screen-reader-neutral unless it is interactive.

### Rule scanner

Scale a 1–3px rule across the axis or reveal repeated rules with a mask. Use linear timing and crisp edges; avoid glow.

## Easing and duration

```css
:root {
  --ease-kova-snap: cubic-bezier(.16, 1, .3, 1);
  --ease-kova-mechanical: cubic-bezier(.65, 0, .35, 1);
  --duration-control: 180ms;
  --duration-reveal: 620ms;
}
```

- Use linear interpolation for values directly tied to scroll.
- Use `--ease-kova-snap` when a threshold triggers a reveal.
- Avoid springing every element; reserve elasticity for one mask release or typographic recoil.

## Reduced motion

Design the alternative explicitly:

```css
@media (prefers-reduced-motion: reduce) {
  .kova-sticky-sequence { height: auto; }
  .kova-sticky-stage { position: relative; min-height: 100svh; }
  .kova-parallax-layer { transform: none !important; }
  .kova-mask { clip-path: var(--mask-open); }
  .kova-marquee { animation: none; white-space: normal; }
}
```

Show the final, comprehensible composition and retain color, scale, and hierarchy. Do not hide information that otherwise appears during scroll.

## Performance budget

- Target smooth interaction on a mid-range mobile device.
- Limit persistent full-screen composited layers to roughly four.
- Apply `will-change` only shortly before motion and remove it afterward when possible.
- Avoid continuous blur, large filter animations, video texture overlays, and dozens of independent observers.
- Pause offscreen loops and decorative video.

