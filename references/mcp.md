# MCP & install — UI Constructor

## Agent rule (all MCP)

1. `search_tool` with server keyword (e.g. `magicui`)
2. Read schema / qualified name (`magicui__…`)
3. `use_tool` — never invent params or tool names

Restart the agent session if a new server was just added to config and tools do not appear.

---

## magicui — Official Magic UI MCP

**Docs:** https://magicui.design/docs/mcp  
**Package:** `@magicuidesign/mcp` (npm, v2+)  

Example Grok / stdio config:

```toml
[mcp_servers.magicui]
command = "npx"
args = ["-y", "@magicuidesign/mcp@latest"]
enabled = true
startup_timeout_sec = 90
```

**CLI (other IDEs):**  
`npx @magicuidesign/cli@latest install <cursor|windsurf|claude|cline|roo-cline>`

### When to use

- User asks for a Magic UI component (Dock, Bento, Animated Beam, …)
- Agent picks from `library.md` ★★★/★★ Magic UI rows
- Need correct component API / source instead of hallucinating props

### ★★★ Magic UI (preferred first when DNA matches)

`dock` · `border-beam` · `blur-fade` · `lens` · `animated-theme-toggler`  
(Full roles in `library.md`; PoC + FOUC/theme CSS in `poc-patterns.md` § Canon.)

### Example prompts (then fulfill via MCP)

- “Add Magic UI dock navigation”
- “Add border beam on glass nav”
- “Add lens on screenshot lightbox”
- “Add animated theme toggler”
- “Add blur fade / marquee / …” (if in catalog)

### Fallback without MCP

1. Open component docs URL from `library.md`
2. Or CLI into project (shadcn registry style when project uses shadcn):

```bash
npx shadcn@latest add "https://magicui.design/r/<component>.json"
```

Exact registry slug = component kebab-name (e.g. `dock`, `bento-grid`, `animated-beam`).  
If URL 404: scrape docs page or use MCP after session has tools.

### After install

1. Map colors to project tokens (no stock purple).
2. Wire into layout; one signature motion.
3. `site-user-debug` if visual chunk done.

---

## Related MCP (optional setup)

| Server | Use for |
|--------|---------|
| `shadcn` | Base UI primitives (button, dialog, form) |
| `aceternity` | Aceternity registry animated blocks |
| `21st` | Optional generate (handshake may fail) |
| `playwright` | Visual check after add |
| `context7` | Lib docs (framer-motion, tailwind, etc.) |

**React Bits:** no MCP. Flow:

1. Open `https://reactbits.dev/...` from library
2. Copy component into `src/components/react-bits/` (or project convention)
3. Dependencies: check page (often `framer-motion`, Three, GSAP) — install only if needed
4. Recolor; respect reduced-motion

---

## Decision table

| Need | Tool |
|------|------|
| Magic UI component source | MCP `magicui` |
| shadcn primitive | MCP `shadcn` |
| Aceternity block | MCP `aceternity` or `npx shadcn add @aceternity/...` |
| React Bits | Docs + manual copy |
| Design DNA | skill `design-knowledge` |
| Favorites / anti-slop | skill `ui-constructor` |
