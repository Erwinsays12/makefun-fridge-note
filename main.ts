// Notes From a Passive-Aggressive Fridge
// Writes one dry, petty, single-line note from a smart fridge to its owner
// at /output/entry.txt. Fully deterministic: no clock, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "My door sensor logged 14 openings last night. You took nothing. " +
  "I have filed this under 'performative hunger' and cc'd the ice maker.";

// Self-check against the competition gate: 1-200 UTF-8 characters, one line.
if ([...NOTE].length < 1 || [...NOTE].length > 200 || NOTE.includes("\n")) {
  throw new Error("note violates the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
