# ui-constructor-skill

**Grok / AI-agent skill** for building premium UIs without default “AI slop”.

Curated **Magic UI** + **React Bits** catalog, anti-slop rules, MCP/CLI install paths, and an **industrial dark portfolio** reference stack (Ferrofluid, glass nav, solid cards, Dock, Border Beam, Lens, Theme Toggler).

| | |
|--|--|
| **Repo** | https://github.com/fermerpavel1-arch/ui-constructor-skill |
| **License** | MIT |
| **Version** | 1.0.0 |
| **Node** | ≥ 18 |

---

## What you get

- **Curated component library** with tiers ★★★ / ★★ / ★ (prefer proven pieces first)
- **Anti-AI-slop checklist** — no purple SaaS templates, emoji icons, FX carnival
- **Magic UI** via MCP (`@magicuidesign/mcp`) + shadcn registry CLI fallback
- **React Bits** manual PoC flow (Glass Surface, Ferrofluid, Pixel Card, …)
- **Architecture locks**: glass only on chrome; solid content cards; one WebGL bg; nav outside page transitions

### Signature reference stack

1. React Bits **Ferrofluid** — one full-site WebGL background  
2. React Bits **Glass Surface** — nav / floating chrome only  
3. **Solid** frosted content cards (no `backdrop-filter` under opacity anims)  
4. Magic UI **Dock**, **Border Beam**, **Blur Fade**, **Lens**, **Theme Toggler**  
5. Type: **Syne + Instrument Sans** · accent gold / support violet  

---

## Install the skill

### Option A — npm from GitHub (recommended)

```bash
npm install github:fermerpavel1-arch/ui-constructor-skill
```

`postinstall` copies files into:

```text
~/.grok/skills/ui-constructor/
```

On Windows: `%USERPROFILE%\.grok\skills\ui-constructor\`

Re-run install anytime:

```bash
npx ui-constructor-skill
# or
npm run install-skill --prefix node_modules/ui-constructor-skill
```

Custom target directory:

```bash
UI_CONSTRUCTOR_SKILL_DIR=/path/to/skills/ui-constructor npx ui-constructor-skill
# or
npx ui-constructor-skill --dir /path/to/skills/ui-constructor
```

Dry run (no write):

```bash
npx ui-constructor-skill --dry-run
```

### Option B — one-shot npx (no save in package.json)

```bash
npx github:fermerpavel1-arch/ui-constructor-skill
```

### Option C — manual clone

```bash
git clone https://github.com/fermerpavel1-arch/ui-constructor-skill.git
# copy SKILL.md + references/ into ~/.grok/skills/ui-constructor/
```

After install, **restart Grok** (or reload skills) so `/ui-constructor` is available.

---

## Install UI deps in *your* project

This skill is documentation + agent rules. For a real React site using the reference stack:

```bash
# motion + icons (Magic UI / most animated components)
npm install framer-motion motion lucide-react clsx

# WebGL Ferrofluid (React Bits)
npm install ogl

# optional: shadcn CLI for Magic UI registry JSON
npx shadcn@latest add "https://magicui.design/r/dock.json"
npx shadcn@latest add "https://magicui.design/r/border-beam.json"
npx shadcn@latest add "https://magicui.design/r/blur-fade.json"
npx shadcn@latest add "https://magicui.design/r/lens.json"
npx shadcn@latest add "https://magicui.design/r/animated-theme-toggler.json"
```

Magic UI MCP (Grok / agent config example):

```toml
[mcp_servers.magicui]
command = "npx"
args = ["-y", "@magicuidesign/mcp@latest"]
enabled = true
startup_timeout_sec = 90
```

React Bits: no official MCP — copy from https://reactbits.dev and recolor to project tokens.

---

## Package layout

```text
ui-constructor-skill/
  package.json          # npm package + postinstall
  bin/install.js        # copies skill → ~/.grok/skills/ui-constructor
  SKILL.md              # agent workflow + locks
  references/
    anti-slop.md        # never / always rules
    library.md          # curated Magic UI + React Bits tiers
    mcp.md              # MCP + CLI install
    poc-patterns.md     # PoC recipes + portfolio architecture
  README.md
  LICENSE
```

Optional related skills (not bundled): `design-knowledge`, `frontend-design`, `site-user-debug`.

---

## Hard rules (short)

1. Prefer ★★★ then ★★ from `library.md`  
2. Outside list / Aceternity / 21st → propose → wait «ок»  
3. Glass on chrome; solid cards under blur/opacity transitions  
4. Max ~3 intentional effects per page  
5. Recolor every demo (no stock indigo)  
6. One heavy bg FX max (never Ferrofluid + Flickering Grid together)  

Full rules: `SKILL.md` + `references/anti-slop.md`.

---

## Release

See [Releases](https://github.com/fermerpavel1-arch/ui-constructor-skill/releases) for version notes.

```bash
# pin a release tag
npm install github:fermerpavel1-arch/ui-constructor-skill#v1.0.0
```

## License

MIT
