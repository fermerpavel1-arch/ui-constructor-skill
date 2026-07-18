---
name: ui-constructor
description: >
  Living UI constructor skill for AI coding agents. Anti-AI-slop rules, curated
  Magic UI + React Bits library with PoC install paths, MCP usage (magicui, shadcn, aceternity).
  Full kit (catalog + anti-slop + MCP + orchestration). Reference stack: industrial dark
  portfolio (Ferrofluid, glass nav, solid cards, Dock, Border Beam, Lens, Theme Toggler).
  Rebuild on disk ONLY after explicit user OK. Load on ANY UI/landing.
  Triggers: ui-constructor, magicui, react bits, anti-slop, bento, dock, glass-surface, ferrofluid.
type: workflow
priority: high
triggers:
  - ui-constructor
  - magicui
  - react bits
  - anti-slop
  - bento-grid
  - glass-surface
  - ferrofluid
  - landing
  - UI
requires:
  - design-knowledge
  - frontend-design
  - site-user-debug
conflicts: []
---

# UI Constructor — living kit

Full kit **D**: catalog + anti-slop + MCP/PoC + orchestration with design stack.  
Not frozen docs — but **disk rebuild only with permission** (see below).

## Reference stack (industrial / personal portfolio DNA)

Use when the brief is dark industrial, personal portfolio, or “premium glass + one strong bg”.

**Signature stack (harmonized, not carnival):**

1. **React Bits Ferrofluid** — one full-site WebGL bg (gold / violet); soft veil on non-home  
2. **React Bits Glass Surface** — **nav chrome only** (liquid glass + optional **Border Beam**)  
3. **Solid content cards** — frosted fill, **no** backdrop-filter (safe under blur/opacity transitions)  
4. **Magic UI Dock** — contact strip (SVG icons, no emoji)  
5. **Magic UI Blur Fade + custom Reveal** — enter motion with blur  
6. **Magic UI Lens** — screenshot lightbox  
7. **Magic UI Animated Theme Toggler** — View Transitions, `html.dark`, FOUC script  
8. **Pixel Card** — home identity; avatar crop face+shoulders  
9. Type: **Syne + Instrument Sans**; accent **gold** CTA, violet support  

**Architecture rules (do not regress):**

- Navbar **outside** page transition wrapper (glass never freezes)  
- Page/content transitions: opacity + blur OK on **non-glass** trees  
- `html { scrollbar-gutter: stable }` — no route layout jump  
- Never dual Ferrofluid; never Ferrofluid + Flickering Grid together  

When niche is law/resto/SaaS → still use `design-knowledge` DNA; pull ★★★ pieces only if they fit.

## Locked prefs (defaults for this skill)

| Topic | Lock |
|-------|------|
| Role | Catalog + anti-slop + MCP + pipeline (not catalog-only) |
| Rebuild files | **Only** after explicit «да / обнови / добавь / запиши». First: propose in chat unless user already said обнови. **No silent write.** |
| When to load | **Every** UI / landing / dashboard (with design-knowledge + frontend-design) |
| DNA | **By niche** via design-knowledge. **Exception:** industrial portfolio brief → reference stack above |
| Stack default | **Best fit** for the job; agent picks and states why in 1 line (Vite/React, Next+TW, or HTML) |
| Glass | **Chrome (nav/floating):** Glass Surface. **Content cards:** solid frost by default; glass on cards only if no parent opacity/filter anim |
| Favorites | ★★★ set (Ferrofluid, Glass nav, Dock, Border Beam, Blur Fade, Lens, Theme Toggler, Pixel Card) + 1–2 more only if harmony |
| Motion | Up to **3 effects** per page (signature + bg + micro OK; still no carnival stack) |
| Outside ★★★/★★ | Magic UI / React Bits / Aceternity / 21st / other kits: **propose → wait user «ок»** |
| site-user-debug | **mid + final** only (skip early on every tiny chunk) |

## Agent: rebuild protocol (MANDATORY)

1. User signal to change kit («добавь / убери / нравится / не нравится / перестрой / обнови») **or** grill lock to persist.  
2. Agent shows **what would change** (paths + short diff idea) in chat — **skip propose** if user already said «обнови / запиши» with clear scope.  
3. **Write to disk only after** clear OK: «да», «обнови», «запиши», «добавь в конструктор».  
4. After write: 1–3 lines — what / path / why.  
5. Promote to ★★★ only when user says essentially «очень нравится» **and** OK to edit.  
6. Do **not** invent library entries the user never approved.

| Action | File |
|--------|------|
| Favorite / reject / tiers | `references/library.md` |
| Anti-slop rule | `references/anti-slop.md` |
| MCP/CLI | `references/mcp.md` (+ config only if user OK) |
| PoC canon | `references/poc-patterns.md` |
| Workflow / locks | this `SKILL.md` |

Install path (example): `~/.grok/skills/ui-constructor/` (or your agent skills root).

## When to load

- **Any** site, landing, UI, dashboard polish  
- Picking motion / glass / bento / dock / ferrofluid / Magic UI / React Bits  
- User says «конструктор», anti-slop, component kit  
- Brief “industrial / dark glass personal portfolio”

## Pipeline

```text
1. This SKILL.md (+ locked prefs + reference stack)
2. references/anti-slop.md
3. references/library.md  → ★★★ first when DNA matches
4. design-knowledge       → niche DNA lock
5. references/mcp.md      → magicui / shadcn only as allowed
6. references/poc-patterns.md  → § Canon for portfolio architecture
7. frontend-design craft
8. site-user-debug at mid + final (not every micro-edit)
```

## Hard rules

1. **Curated first.** Prefer `library.md` ★★★ then ★★.  
2. **Outside list / Aceternity / 21st / extra Magic-RB:** propose in chat → **wait «ок»** before install/code.  
3. **Glass Surface** on **chrome**; content cards **solid** unless DNA + no freeze risk.  
4. **+1–2 favorites** only if role fits and composition stays coherent.  
5. **Max 3 effects** per page (signature + bg + micro OK; not 5 FX stacked).  
6. **Recolor every demo** — no stock purple-indigo; industrial gold/void when matching DNA.  
7. **Anti-slop** non-negotiable — `references/anti-slop.md`.  
8. **Magic UI:** MCP `magicui` (`search_tool` → `use_tool`) before inventing props.  
9. **React Bits:** docs copy; no official MCP.  
10. **Stack:** choose best tool for the job; don’t force React if pure HTML is enough **and** glass can be CSS-approximated — if full kit components needed, use React.  
11. **Industrial portfolio DNA:** glass radius ~40, one gold accent, dark void, one Ferrofluid, nav outside transitions.  
12. **Never** dual heavy bg FX; **never** opacity-animate an ancestor of live glass.

## Coordination

| Skill / tool | Role |
|--------------|------|
| `ui-constructor` | Kit + locks + MCP PoC + reference stack |
| `design-knowledge` | Niche DNA lock |
| `frontend-design` | Layout / type craft |
| `site-user-debug` | mid + final eyes |
| MCP `magicui` | Magic UI source |
| MCP `shadcn` / `aceternity` / `21st` | Propose → wait «ок» if not already project stack |

## Slash

`/ui-constructor` — force this kit for the current UI task.
