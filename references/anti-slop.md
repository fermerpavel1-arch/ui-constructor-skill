# Anti-AI-slop — universal kit

Fail and fix before “готово” if any apply without **explicit** user lock.

## Never by default

| Slop | Why it dies |
|------|-------------|
| Cream canvas + indigo/violet gradient “SaaS AI” | Default LLM look |
| Purple glow blobs everywhere | Carnival, not brand |
| Decorative serif word-swap on every H1 | Fake “premium” |
| 01 / 02 / 03 markers without real steps | Empty structure |
| Emoji as icons | Cheap; use SVG stroke ~1.5–2 |
| 3+ competing primary CTAs | No hierarchy |
| Motion on every card + hero + bg | Noise; max ~3 intentional effects |
| Demo neon / rainbow from component kits | Not recolored |
| Random 3 border-radii | No system |
| Glass carnival on law/trust sites | Wrong DNA |
| Fake charts / fake testimonials | Trust break |
| Inter-only + purple button everywhere | Template |
| Dual heavy WebGL backgrounds | Performance + visual mud (one Ferrofluid only) |
| Glass under parent `opacity`/`filter` anim | “Frozen” glass — nav outside transition tree |
| Full-body photo squeezed in tiny avatar | Crop face + shoulders |

## Always prefer

1. **One canvas family** (near-black industrial *or* clean light — pick; theme toggler OK with dark islands).
2. **One chromatic accent** with a job (example DNA: **gold** CTA/active; violet support only).
3. **One display + one body font** (example: **Syne + Instrument Sans**).
4. **Hairline borders + solid density** over soft shadow soup; content cards solid when animated.
5. **Real content / real photos** over abstract mesh gradients.
6. **`prefers-reduced-motion`** respected (Border Beam off / shorter motion).
7. **Touch targets ≥ 44–48px** on mobile; sticky contact path (Dock or CTA).
8. **`scrollbar-gutter: stable`** on multi-route SPAs to kill layout jump.

## Component-kit discipline

- Magic UI / React Bits / Aceternity = **parts**, not the brand.
- After install: map colors → CSS variables / Tailwind tokens of the project.
- Background FX (`ferrofluid`, `flickering-grid`, ripples): **one** site wallpaper max; route mood via soft veil, not second FX.
- **Glass Surface** = chrome (nav, floating). Content panels = solid frost unless DNA demands glass **and** no parent opacity anim.
- Recolor every demo — example industrial: gold `#ffd60a` / void `#0b0a10`, not stock indigo.

## Quick self-check (30s)

- [ ] Could this be mistaken for “default ChatGPT landing”? → change palette + type  
- [ ] Is accent used only where it earns attention?  
- [ ] ≤3 intentional effects (richer OK; no carnival stack)  
- [ ] Glass only where it won’t freeze; solid cards if transitions blur/fade  
- [ ] Components from ★★★/★★ library; anything else has user «ок»  
- [ ] Matches reference stack when brief is industrial portfolio: ferrofluid + glass nav + solid cards + dock  
- [ ] `site-user-debug` at mid + final when visual chunk landed  

Owner overrides beat this list — if user locks a style, document the lock in the project (`BRAND.md` / DNA), not by deleting the rule here.

**Grill lock:** niche DNA; best-fit stack; rebuild skill files only after explicit OK.  
**Reference stack:** industrial portfolio DNA → see `library.md` + `poc-patterns.md` § Canon.
