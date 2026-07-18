#!/usr/bin/env node
/**
 * Install ui-constructor skill into one or more AI-agent skill directories.
 *
 * Presets (global):
 *   grok      ~/.grok/skills/ui-constructor
 *   claude    ~/.claude/skills/ui-constructor
 *   cursor    ~/.cursor/skills/ui-constructor
 *   codex     ~/.codex/skills/ui-constructor
 *   opencode  ~/.config/opencode/skills/ui-constructor
 *   windsurf  ~/.codeium/windsurf/skills/ui-constructor
 *   antigravity ~/.gemini/antigravity/skills/ui-constructor
 *
 * Project-local:
 *   --project  also writes:
 *     ./.claude/skills/ui-constructor
 *     ./.agents/skills/ui-constructor
 *     ./.cursor/skills/ui-constructor
 *
 * Examples:
 *   npx ui-constructor-skill
 *   npx ui-constructor-skill --agents all
 *   npx ui-constructor-skill --agents grok,claude,cursor
 *   npx ui-constructor-skill --dir /custom/skills/ui-constructor
 *   npx ui-constructor-skill --project --agents none
 *   UI_CONSTRUCTOR_AGENTS=claude,cursor npx ui-constructor-skill
 *   node bin/install.js --dry-run --agents all
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.resolve(__dirname, "..");
const SKILL_NAME = "ui-constructor";
const FILES = [
  "SKILL.md",
  "references/anti-slop.md",
  "references/library.md",
  "references/mcp.md",
  "references/poc-patterns.md",
];

/** @type {Record<string, (home: string) => string>} */
const AGENT_PRESETS = {
  grok: (home) => path.join(home, ".grok", "skills", SKILL_NAME),
  claude: (home) => path.join(home, ".claude", "skills", SKILL_NAME),
  cursor: (home) => path.join(home, ".cursor", "skills", SKILL_NAME),
  codex: (home) => path.join(home, ".codex", "skills", SKILL_NAME),
  opencode: (home) => path.join(home, ".config", "opencode", "skills", SKILL_NAME),
  windsurf: (home) => path.join(home, ".codeium", "windsurf", "skills", SKILL_NAME),
  antigravity: (home) =>
    path.join(home, ".gemini", "antigravity", "skills", SKILL_NAME),
};

/** Parent config dir that signals “this agent is installed / in use” */
const AGENT_HOME_HINTS = {
  grok: (home) => path.join(home, ".grok"),
  claude: (home) => path.join(home, ".claude"),
  cursor: (home) => path.join(home, ".cursor"),
  codex: (home) => path.join(home, ".codex"),
  opencode: (home) => path.join(home, ".config", "opencode"),
  windsurf: (home) => path.join(home, ".codeium", "windsurf"),
  antigravity: (home) => path.join(home, ".gemini", "antigravity"),
};

const PROJECT_REL_DIRS = [
  path.join(".claude", "skills", SKILL_NAME),
  path.join(".agents", "skills", SKILL_NAME),
  path.join(".cursor", "skills", SKILL_NAME),
  path.join(".grok", "skills", SKILL_NAME),
];

function parseArgs(argv) {
  const out = {
    dryRun: false,
    dirs: [],
    agents: null, // null = default auto
    project: false,
    list: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run" || a === "-n") out.dryRun = true;
    else if (a === "--dir" || a === "-d") {
      const v = argv[++i];
      if (v) out.dirs.push(v);
    } else if (a === "--agents" || a === "--agent" || a === "-a") {
      out.agents = argv[++i] || "";
    } else if (a === "--project" || a === "-p") out.project = true;
    else if (a === "--list" || a === "-l") out.list = true;
    else if (a === "--help" || a === "-h") out.help = true;
  }

  // env overrides when flags omitted
  if (process.env.UI_CONSTRUCTOR_SKILL_DIR) {
    out.dirs.push(process.env.UI_CONSTRUCTOR_SKILL_DIR);
  }
  if (out.agents == null && process.env.UI_CONSTRUCTOR_AGENTS) {
    out.agents = process.env.UI_CONSTRUCTOR_AGENTS;
  }
  if (process.env.UI_CONSTRUCTOR_PROJECT === "1") {
    out.project = true;
  }

  return out;
}

function helpText() {
  const names = Object.keys(AGENT_PRESETS).join(", ");
  return `Usage: ui-constructor-skill [options]

Install the ui-constructor skill into AI agent skill directories.

Options:
  --agents, -a <list>   Comma-separated presets: ${names}
                        Special: all | auto | none
                        Default: auto (detected agent homes + grok)
  --dir, -d <path>      Extra custom skill folder (repeatable)
  --project, -p         Also install into project-local skill folders
  --list, -l            Print resolved target paths and exit
  --dry-run, -n         Show copies without writing
  --help, -h            This help

Environment:
  UI_CONSTRUCTOR_AGENTS=grok,claude,cursor
  UI_CONSTRUCTOR_SKILL_DIR=/custom/path/ui-constructor
  UI_CONSTRUCTOR_PROJECT=1

Examples:
  npm install github:fermerpavel1-arch/ui-constructor-skill
  npx ui-constructor-skill --agents all
  npx ui-constructor-skill --agents claude,cursor --project
  npx ui-constructor-skill --dir ~/my-agents/skills/ui-constructor
`;
}

function resolveAgentTargets(agentsSpec, home) {
  const targets = [];
  if (agentsSpec == null) agentsSpec = "auto";

  const raw = String(agentsSpec)
    .split(/[,\s]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  if (raw.includes("none") || raw.includes("off")) {
    return targets;
  }

  if (raw.includes("all")) {
    for (const name of Object.keys(AGENT_PRESETS)) {
      targets.push({
        label: name,
        dir: AGENT_PRESETS[name](home),
      });
    }
    return targets;
  }

  if (raw.includes("auto") || raw.length === 0) {
    let any = false;
    for (const name of Object.keys(AGENT_PRESETS)) {
      const hint = AGENT_HOME_HINTS[name](home);
      if (fs.existsSync(hint)) {
        targets.push({ label: name, dir: AGENT_PRESETS[name](home) });
        any = true;
      }
    }
    // Always offer grok path if nothing detected (primary default)
    if (!any) {
      targets.push({ label: "grok", dir: AGENT_PRESETS.grok(home) });
    }
    return targets;
  }

  for (const name of raw) {
    if (!AGENT_PRESETS[name]) {
      console.error(`unknown agent preset: ${name}`);
      console.error(`known: ${Object.keys(AGENT_PRESETS).join(", ")}, all, auto, none`);
      process.exitCode = 1;
      continue;
    }
    targets.push({ label: name, dir: AGENT_PRESETS[name](home) });
  }
  return targets;
}

function resolveProjectTargets(cwd) {
  return PROJECT_REL_DIRS.map((rel) => ({
    label: `project:${rel.split(path.sep)[0]}`,
    dir: path.join(cwd, rel),
  }));
}

function uniqueTargets(list) {
  const seen = new Set();
  const out = [];
  for (const t of list) {
    const key = path.resolve(t.dir);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ ...t, dir: key });
  }
  return out;
}

function copyFile(src, dest, dryRun) {
  if (dryRun) {
    console.log(`  [dry-run] ${path.relative(ROOT, src)} -> ${dest}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`  copied ${path.relative(ROOT, src)}`);
}

function installInto(targetDir, dryRun) {
  let ok = 0;
  for (const rel of FILES) {
    const src = path.join(ROOT, rel);
    if (!fs.existsSync(src)) {
      console.error(`  missing package file: ${rel}`);
      process.exitCode = 1;
      continue;
    }
    copyFile(src, path.join(targetDir, rel), dryRun);
    ok++;
  }
  return ok;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(helpText());
    process.exit(0);
  }

  const home = os.homedir();
  const cwd = process.cwd();

  /** @type {{label: string, dir: string}[]} */
  let targets = [];

  // Custom dirs only mode: if agents explicitly none and dirs provided
  targets = targets.concat(resolveAgentTargets(args.agents, home));

  for (const d of args.dirs) {
    targets.push({ label: "custom", dir: path.resolve(d) });
  }

  if (args.project) {
    targets = targets.concat(resolveProjectTargets(cwd));
  }

  targets = uniqueTargets(targets);

  if (targets.length === 0) {
    console.error(
      "no install targets. Use --agents all|grok|claude|… or --dir <path> or --project"
    );
    process.exit(1);
  }

  console.log("ui-constructor-skill install");
  console.log(`package: ${ROOT}`);
  console.log(`targets (${targets.length}):`);

  if (args.list) {
    for (const t of targets) {
      console.log(`  [${t.label}] ${t.dir}`);
    }
    process.exit(0);
  }

  let totalOk = 0;
  for (const t of targets) {
    console.log(`\n→ [${t.label}] ${t.dir}`);
    totalOk += installInto(t.dir, args.dryRun);
  }

  if (process.exitCode) {
    console.error(`\nfailed with errors (files touched: ${totalOk})`);
    process.exit(1);
  }

  console.log(
    args.dryRun
      ? `\ndry-run ok — ${targets.length} target(s), ${FILES.length} files each`
      : `\ninstalled into ${targets.length} location(s). Restart agents / reload skills if needed.`
  );
}

main();
