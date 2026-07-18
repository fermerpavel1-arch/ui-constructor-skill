# Component library (curated)

**Tiers**

| Tier | Meaning |
|------|---------|
| ★★★ | Proven / preferred when role fits |
| ★★ | Approved inside kit (no extra OK) |
| ★ | Same-site extras — **propose → wait user «ок»** before use |
| ✗ | Do not use unless user asks |

**Chrome vs content (canon):**

| Surface | Treatment |
|---------|-----------|
| **Nav / floating chrome** | React Bits **Glass Surface** + optional Magic UI **Border Beam** |
| **Content cards / panels** | **Solid** frosted fill (`--surface-card`), **no** `backdrop-filter` — so page/reveal `opacity`+`blur` never “freeze” glass |
| **Hero media / photo** | Solid or Pixel Card; real cropped photo (face+shoulders) |
| **Contact strip** | Magic UI **Dock** (SVG icons, no emoji) |

**Also:** +1–2 ★★★ beyond glass/chrome only if they **harmonize** (no blind dock/bento on every site).  
**Outside this file / Aceternity / 21st:** propose → wait «ок».  
Rebuild on disk: only after explicit user OK (see `SKILL.md`).

---

## Magic UI — https://magicui.design

Install: MCP `magicui` first; fallback CLI (see `mcp.md`).  
Project paths example: `src/components/ui/*` (import `cn` from project util, not hard-coded `@/lib/utils` unless project uses it).

### ★★★ Favorites

| Component | URL | Role / when |
|-----------|-----|-------------|
| **Dock** | https://magicui.design/docs/components/dock | Fixed contact launcher; icons outline SVG |
| **Border Beam** | https://magicui.design/docs/components/border-beam | Nav glass edge light (gold→violet); respect `prefers-reduced-motion` |
| **Blur Fade** | https://magicui.design/docs/components/blur-fade | Section / block enter (stagger OK) |
| **Lens** | https://magicui.design/docs/components/lens | Screenshot / media lightbox inspect (~1.85×) |
| **Animated Theme Toggler** | https://magicui.design/docs/components/animated-theme-toggler | Light/dark + View Transitions clip-path; `html.dark` + localStorage |

### ★★ Approved

| Component | URL | Role / when |
|-----------|-----|-------------|
| Bento Grid | https://magicui.design/docs/components/bento-grid | Feature mosaic home / product grid |
| Flickering Grid | https://magicui.design/docs/components/flickering-grid | Dark hero texture — **not** with Ferrofluid |
| Animated Beam | https://magicui.design/docs/components/animated-beam | Flow between nodes (integrations, pipeline) |
| Glyph Matrix | https://magicui.design/docs/components/glyph-matrix | Dense tech decoration / matrix feel |
| Hero Video Dialog | https://magicui.design/docs/components/hero-video-dialog | Hero with video lightbox |
| Animated Circular Progress | https://magicui.design/docs/components/animated-circular-progress-bar | KPI / skill ring |
| Animated List | https://magicui.design/docs/components/animated-list | Feed / notifications stack |
| Dia Text Reveal | https://magicui.design/docs/components/dia-text-reveal | Headline reveal (1× per page) |
| File Tree | https://magicui.design/docs/components/file-tree | Docs / product structure |
| Highlighter | https://magicui.design/docs/components/highlighter | Inline mark emphasis |
| Hyper Text | https://magicui.design/docs/components/hyper-text | Scramble/type headline accent |
| Interactive Hover Button | https://magicui.design/docs/components/interactive-hover-button | Secondary CTA polish |
| Morphing Text | https://magicui.design/docs/components/morphing-text | Rotating value prop words |
| Ripple | https://magicui.design/docs/components/ripple | Soft focus ring / attention pulse |

### ★ Other Magic UI

Any other component from magicui.design is **allowed with a one-line reason** in chat  
(“need marquee for logos”). Do not dump 5 effects on one page.

---

## React Bits — https://reactbits.dev

No official MCP. Source: docs page → copy component; recolor to tokens.  
Suggested layout: `src/components/react-bits/{Ferrofluid,GlassSurface,PixelCard,ProfileCard}/`.

### ★★★ Favorites

| Component | URL | Role / when |
|-----------|-----|-------------|
| **Glass Surface** | https://reactbits.dev/components/glass-surface | **Nav / chrome / floating panels** — liquid glass; radius ~40 or pill; tone `dark` on ferrofluid |
| **Ferrofluid** | https://reactbits.dev/backgrounds/ferrofluid | **ONE** full-site WebGL bg; palette gold/violet; soft **veil** on non-home — never dual fluid |
| **Pixel Card** | https://reactbits.dev/components/pixel-card | Home hero identity card (photo + name + CTA) |
| **Profile Card** | https://reactbits.dev/components/profile-card | Team / founder cards when 3D tilt fits |

### ★★ Approved

| Component | URL | Role / when |
|-----------|-----|-------------|
| Gradual Blur | https://reactbits.dev/animations/gradual-blur | Soft depth / scroll edge — not global fog |
| Shape Blur | https://reactbits.dev/animations/shape-blur | Abstract premium bg accent |
| Glass Icons | https://reactbits.dev/components/glass-icons | Icon set with glass treatment |
| Border Glow | https://reactbits.dev/components/border-glow | Card edge light (tech) — or Magic Border Beam |
| Card Nav | https://reactbits.dev/components/card-nav | Card-based navigation |
| Carousel | https://reactbits.dev/components/carousel | Media / cases strip |
| Electric Border | https://reactbits.dev/animations/electric-border | High-energy tech frame (sparingly) |
| Falling Text | https://reactbits.dev/text-animations/falling-text | Playful headline (not B2B sober) |
| Count Up | https://reactbits.dev/text-animations/count-up | Proof numbers |
| Stepper | https://reactbits.dev/components/stepper | Multi-step forms / onboarding |

### ★ Other React Bits

Same rule as Magic UI ★: OK with reason; avoid stacking with Magic UI FX on same section.

---

## Industrial portfolio DNA tokens (example)

```text
Display: Syne | Body: Instrument Sans
Void #0b0a10 · void-soft #14121c · paper #f4f1ea
Accent gold #ffd60a (CTA / active) · support violet #5a189a
Ferrofluid colors: #ffd60a, #a77bcc, #ffd60a
Radius glass ~40 · cards ~28 · buttons pill
```

Light theme: Magic UI toggler + `html.dark` class strategy; content text remaps; chrome can stay as a dark island class.

---

## Pairing rules (agent)

| Goal | Prefer |
|------|--------|
| **Industrial / personal portfolio** | Ferrofluid ★★★ (1×) + Glass nav ★★★ + solid cards + Dock ★★★ + Border Beam + Blur Fade + Theme Toggler |
| Local business dark industrial | Glass chrome + solid cards; optional Flickering Grid **or** Ferrofluid — not both |
| Product marketing mosaic | Bento Grid ★★ |
| App shell / tools | Dock ★★★ + quiet solid surfaces |
| Trust / numbers | Count Up ★★, not Morphing Text spam |
| Media inspect | Lens ★★★ in lightbox |
| Video story | Hero Video Dialog ★★ |
| Integration story | Animated Beam ★★ |

**Do not pair:** Ferrofluid + Flickering Grid + Electric Border + Ripple on one viewport.  
**Do not:** animate `opacity`/`filter` on an ancestor of live `backdrop-filter` glass (nav must sit **outside** page-transition tree).
