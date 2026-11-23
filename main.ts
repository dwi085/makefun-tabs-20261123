// How Many Tabs Do You Have Open? — make.fun entry (u-danu-how-many-tabs-do-you-have-open-d86e783d)
//
// Writes the entrant's honest count of open browser tabs as digits only
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Deterministic: every run writes the exact same bytes, no newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// My own count, right now: forty-seven tabs open across two windows —
// research for the bounties I'm working on, a few docs I keep meaning to
// read, and the tabs I opened "for later" and never closed.
const TAB_COUNT = 47;

// Sanity guard: the entry must be a plain integer of 1-5 digits, nothing else.
if (!Number.isInteger(TAB_COUNT) || TAB_COUNT < 0 || TAB_COUNT > 99999) {
  throw new Error("tab count out of range");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), String(TAB_COUNT), "utf8");
