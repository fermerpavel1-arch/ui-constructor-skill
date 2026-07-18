#!/usr/bin/env node
/**
 * Install ui-constructor skill into the local Grok skills directory.
 *
 * Default target:
 *   Windows: %USERPROFILE%\.grok\skills\ui-constructor
 *   macOS/Linux: ~/.grok/skills/ui-constructor
 *
 * Override:
 *   UI_CONSTRUCTOR_SKILL_DIR=/custom/path node bin/install.js
 *   node bin/install.js --dir /custom/path
 *   node bin/install.js --dry-run
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.resolve(__dirname, "..");
const FILES = [
  "SKILL.md",
  "references/anti-slop.md",
  "references/library.md",
  "references/mcp.md",
  "references/poc-patterns.md",
];

function parseArgs(argv) {
  const out = { dryRun: false, dir: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run" || a === "-n") out.dryRun = true;
    else if (a === "--dir" || a === "-d") out.dir = argv[++i];
    else if (a === "--help" || a === "-h") out.help = true;
  }
  return out;
}

function defaultTargetDir() {
  if (process.env.UI_CONSTRUCTOR_SKILL_DIR) {
    return path.resolve(process.env.UI_CONSTRUCTOR_SKILL_DIR);
  }
  return path.join(os.homedir(), ".grok", "skills", "ui-constructor");
}

function copyFile(src, dest, dryRun) {
  if (dryRun) {
    console.log(`[dry-run] copy ${src} -> ${dest}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`copied ${path.relative(ROOT, src)} -> ${dest}`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(`Usage: ui-constructor-skill [--dir <path>] [--dry-run]

Installs the skill files into ~/.grok/skills/ui-constructor (or --dir).

Also available as:
  npm install github:fermerpavel1-arch/ui-constructor-skill
  npx github:fermerpavel1-arch/ui-constructor-skill
`);
    process.exit(0);
  }

  const target = args.dir ? path.resolve(args.dir) : defaultTargetDir();
  console.log(`ui-constructor-skill install`);
  console.log(`target: ${target}`);

  let ok = 0;
  for (const rel of FILES) {
    const src = path.join(ROOT, rel);
    if (!fs.existsSync(src)) {
      console.error(`missing package file: ${rel}`);
      process.exitCode = 1;
      continue;
    }
    copyFile(src, path.join(target, rel), args.dryRun);
    ok++;
  }

  if (process.exitCode) {
    console.error(`failed: ${ok}/${FILES.length} files`);
    process.exit(1);
  }

  console.log(
    args.dryRun
      ? `dry-run ok (${ok} files)`
      : `installed ${ok} files. Restart Grok or reload skills if needed.`
  );
}

main();
