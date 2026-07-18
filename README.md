# ui-constructor-skill

**Grok / AI-agent skill** for building premium UIs without default “AI slop”.

Curated **Magic UI** + **React Bits** catalog, anti-slop rules, MCP/CLI install paths, and an **industrial dark portfolio** reference stack (Ferrofluid, glass nav, solid cards, Dock, Border Beam, Lens, Theme Toggler).

| | |
|--|--|
| **Repo** | https://github.com/fermerpavel1-arch/ui-constructor-skill |
| **License** | MIT |
| **Version** | 1.1.0 |
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

`postinstall` installs into **detected agent homes** (`--agents auto`):
any of Grok / Claude / Cursor / Codex / OpenCode / Windsurf / Antigravity
whose config folder already exists. If none found → Grok path is created.

| Agent | Global skill path |
|-------|-------------------|
| **grok** | `~/.grok/skills/ui-constructor` |
| **claude** | `~/.claude/skills/ui-constructor` |
| **cursor** | `~/.cursor/skills/ui-constructor` |
| **codex** | `~/.codex/skills/ui-constructor` |
| **opencode** | `~/.config/opencode/skills/ui-constructor` |
| **windsurf** | `~/.codeium/windsurf/skills/ui-constructor` |
| **antigravity** | `~/.gemini/antigravity/skills/ui-constructor` |

Windows: same under `%USERPROFILE%\…`.

#### Choose agents

```bash
# every supported agent (create folders)
npx ui-constructor-skill --agents all

# only some
npx ui-constructor-skill --agents grok,claude,cursor

# re-run install
npx ui-constructor-skill
npm run install-skill --prefix node_modules/ui-constructor-skill
```

#### Project-local skills

```bash
npx ui-constructor-skill --project
# also writes:
#   ./.claude/skills/ui-constructor
#   ./.agents/skills/ui-constructor
#   ./.cursor/skills/ui-constructor
#   ./.grok/skills/ui-constructor
```

#### Custom path

```bash
npx ui-constructor-skill --dir /path/to/skills/ui-constructor
# or env
UI_CONSTRUCTOR_SKILL_DIR=/path/to/skills/ui-constructor npx ui-constructor-skill --agents none --dir /path/to/skills/ui-constructor
```

#### List / dry-run

```bash
npx ui-constructor-skill --list
npx ui-constructor-skill --agents all --dry-run
```

Env shortcuts:

```bash
UI_CONSTRUCTOR_AGENTS=claude,cursor
UI_CONSTRUCTOR_PROJECT=1
```

### Option B — one-shot npx (no save in package.json)

```bash
npx github:fermerpavel1-arch/ui-constructor-skill
npx github:fermerpavel1-arch/ui-constructor-skill --agents all
```

### Option C — manual clone

```bash
git clone https://github.com/fermerpavel1-arch/ui-constructor-skill.git
cd ui-constructor-skill
node bin/install.js --agents all
# or copy SKILL.md + references/ into your agent’s skills/ui-constructor/
```

After install, **restart the agent** (or reload skills) so the skill is picked up.

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
npm install github:fermerpavel1-arch/ui-constructor-skill#v1.1.0
```

## License

MIT
