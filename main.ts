import { mkdirSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_OUTPUT_PATH = "/output/entry.txt";
const MAX_ENTRY_CHARS = 120;

const STATUS_UPDATE =
  "Day 9 in the clear vacuum bin. He still blames the dryer while pushing me right past my twin.";

export interface EntryValidationResult {
  valid: boolean;
  chars: number;
  bytes: number;
  reason?: string;
}

/**
 * Return the lost sock status update text.
 */
export function buildSockStatusUpdate(): string {
  return STATUS_UPDATE;
}

/**
 * Validate the entry against the competition gate:
 * UTF-8 text of 1 to 120 characters, not only white space.
 */
export function validateEntry(text: string): EntryValidationResult {
  const chars = [...text].length;
  const bytes = Buffer.byteLength(text, "utf8");

  if (chars < 1) {
    return { valid: false, chars, bytes, reason: "Entry is empty." };
  }
  if (chars > MAX_ENTRY_CHARS) {
    return {
      valid: false,
      chars,
      bytes,
      reason: `Entry exceeds ${MAX_ENTRY_CHARS} characters (${chars}).`,
    };
  }
  if (text.trim().length === 0) {
    return { valid: false, chars, bytes, reason: "Entry is whitespace only." };
  }
  if (/[\r\n\u0000-\u001f\u007f]/.test(text)) {
    return {
      valid: false,
      chars,
      bytes,
      reason: "Entry must be a single line without control characters.",
    };
  }
  return { valid: true, chars, bytes };
}

/**
 * Write the validated status update to the target output file.
 */
export function writeEntry(outputPath: string = DEFAULT_OUTPUT_PATH): EntryValidationResult {
  const text = buildSockStatusUpdate();
  const check = validateEntry(text);
  if (!check.valid) {
    throw new Error(`Invalid entry: ${check.reason}`);
  }
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
  return check;
}

function parseOutArg(argv: string[]): string {
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--out") {
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) {
        throw new Error("Missing path after --out.");
      }
      return next;
    }
    if (arg.startsWith("--out=")) {
      const value = arg.slice("--out=".length);
      if (!value) {
        throw new Error("Empty path in --out=.");
      }
      return value;
    }
  }
  return DEFAULT_OUTPUT_PATH;
}

function isMainModule(): boolean {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return realpathSync(fileURLToPath(import.meta.url)) === realpathSync(resolve(entry));
  } catch {
    return fileURLToPath(import.meta.url) === resolve(entry);
  }
}

if (isMainModule()) {
  const outputPath = parseOutArg(process.argv.slice(2));
  writeEntry(outputPath);
}
