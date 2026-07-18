# PoC patterns — install → recolor → ship

Minimal recipes. Prefer MCP for Magic UI; adjust paths to the real project.

When building a dark industrial personal site / portfolio, copy patterns from **§ Canon**, not stock demos.

## 0. Project readiness (React)

```bash
# Tailwind + path aliases as project already uses
npm i framer-motion motion lucide-react
# ogl — only if Ferrofluid WebGL
npm i ogl
```

Tokens example (industrial):

```css
@theme {
  --font-display: "Syne", system-ui, sans-serif;
  --font-body: "Instrument Sans", system-ui, sans-serif;
  --color-void: #0b0a10;
  --color-void-soft: #14121c;
  --color-paper: #f4f1ea;
  --color-gold: #ffd60a;
  --color-violet: #5a189a;
  --radius-glass: 40px;
  --radius-card: 28px;
}

:root {
  --surface-card: rgba(32, 28, 44, 0.88); /* solid — no backdrop-filter */
  --surface-card-border: rgba(255, 255, 255, 0.1);
  --ferro-base: #050508;
}
```

Path helper (Vite style):

```ts
// src/lib/cn.ts — use this; Magic UI demos often say @/lib/utils
import { clsx, type ClassValue } from 'clsx'
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
```

---

## 1. Magic UI — via MCP (preferred)

```text
search_tool query: "magicui"
use_tool → get component (dock | border-beam | blur-fade | lens | animated-theme-toggler | …)
Write files into project components/ui/
Replace @/lib/utils → project cn path
Replace hard-coded colors with tokens / Tailwind theme
```

### CLI fallback

```bash
npx shadcn@latest add "https://magicui.design/r/dock.json"
npx shadcn@latest add "https://magicui.design/r/border-beam.json"
npx shadcn@latest add "https://magicui.design/r/blur-fade.json"
npx shadcn@latest add "https://magicui.design/r/lens.json"
npx shadcn@latest add "https://magicui.design/r/animated-theme-toggler.json"
```

If registry 404, use MCP or copy from docs.

---

## 2. React Bits — manual PoC

### Glass Surface (chrome ★★★)

1. Open https://reactbits.dev/components/glass-surface  
2. Copy into `src/components/react-bits/GlassSurface/`  
3. Use on **nav / floating chrome**, not necessarily on every content card  
4. Radius **~40** or pill `999` for nav; `tone="dark"` over ferrofluid  
5. Chromium: SVG displacement; Safari: CSS fallback  

### Ferrofluid (bg ★★★ — one instance)

1. https://reactbits.dev/backgrounds/ferrofluid  
2. **Single** fixed layer for entire SPA (`z-0`)  
3. Example palette: `colors={['#ffd60a','#a77bcc','#ffd60a']}`  
4. Non-home: soft gradient **veil on top** (opacity crossfade ~0.9s) — never a second Ferrofluid  
5. Prefer a static gradient fallback under reduced-motion when brand is not “must be fluid”

### Pixel Card (home identity)

1. https://reactbits.dev/components/pixel-card  
2. Real avatar crop (face + shoulders); name + role + CTA  
3. Mark as dark-island if light theme remaps `text-white`

---

## 3. Canon: Portfolio architecture

### Layout tree

```text
ToastProvider (optional)
  FerrofluidBg (fixed z-0, intensity home|page)
  div.relative.z-10
    Navbar          ← OUTSIDE PageTransition (glass never freezes)
    PageTransition  ← content only: opacity + blur
      Outlet
    Footer (non-home)
    ContactDock (Dock ★★★)
```

### Solid content Card

```tsx
// No backdrop-filter — safe under parent opacity/blur animations
<div
  className="min-w-0 overflow-hidden border text-white shadow-[var(--surface-card-shadow)]
    border-[color:var(--surface-card-border)] bg-[var(--surface-card)]"
  style={{ borderRadius: 28 }}
>
  {children}
</div>
```

### Reveal motion

```tsx
// Fade + y + blur; duration ~0.45–0.6s
// initial: { opacity: 0, y: 16, filter: 'blur(10px)' }
// animate: { opacity: 1, y: 0, filter: 'blur(0px)' }
```

### Page transition

```tsx
// AnimatePresence mode="wait"
// Only the page shell: opacity + filter blur(~14px)
// Never wrap Navbar GlassSurface in this tree
```

### Theme toggler

```tsx
// FOUC script in index.html: localStorage theme → html.classList dark (default dark)
// AnimatedThemeToggler in nav; lucide Sun/Moon
// CSS: @custom-variant dark (&:where(.dark, .dark *));
// ::view-transition-old/new(root) { animation: none; mix-blend-mode: normal; }
// Light: soft ferro wash + solid paper cards; chrome dark-island keeps white text
```

### Layout stability

```css
html { scrollbar-gutter: stable; } /* no Home↔page jump in Chrome */
```

### CTA hover

Soft radial wash via `::before` opacity — not solid white flash.

### Avatar

Crop source photo to **face + shoulders** square (~1200px) → public assets.  
Do not show full-body in small rounded frame.

### Contact Dock

Few icons only (e.g. Telegram, Email, social). SVG icons, not emoji.

---

## 4. Acceptance for any PoC

- [ ] Compiles / no red console  
- [ ] Colors = project tokens  
- [ ] Mobile: no overflow, no unreadable FX  
- [ ] Motion ≤ 3 effects total on page (+ subtle hover OK)  
- [ ] Reduced-motion OK  
- [ ] Glass not under animating opacity ancestor  
- [ ] Content cards solid if page uses blur/opacity transitions  
- [ ] One Ferrofluid max; veil for route mood  
- [ ] If site chunk: `site-user-debug` mid/final as appropriate  

---

## 5. Rebuild note

When user says a PoC became “канон” / «очень нравится» + «обнови» — move summary into `library.md`  
and durable recipe under **§ Canon** here.
