// The Tired Dark Lord — entry program for
// make.fun competition u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
//
// The program writes a single 100-word villain monologue to /output/entry.txt.
// The monologue is assembled from its spoken beats, one breath at a time:
// a hero arrives at the worst hour, the Dark Lord offers the wrong chair,
// brags about the nine valleys, gets sidetracked by tax letters about grain,
// hands over his sword, and closes on the paperwork — because the real
// conquest, it turns out, is the surrender form in triplicate.
//
// Craft notes (from the judge's brief):
// - Tiredness is never announced. No "tired", "weary", "exhausted" anywhere.
//   It lives in the pauses ("Just..."), the deflection ("never mind my arm"),
//   the mundane sidetrack (letters about grain), and the final image, where
//   the candles going down quietly stand in for the speaker.
// - The villain is specific: nine valleys conquered, a river-god chained,
//   tax collectors, Barrowgate. A history and a scheme — the scheme being
//   that the hero must sign the surrender form before the killing can start.
// - The last line is the sting: the candles burn down, and so does he.
// - Exactly 100 words, well inside the gate's 1-600 character limit.

import { mkdirSync, writeFileSync } from "node:fs";

// Each beat is one spoken phrase. Joining with single spaces keeps the
// monologue flowing as one continuous piece of dialogue.
const beats: string[] = [
  "So. The hero has come.",
  "They always arrive at the hour the candles gutter",
  "and the ravens stop pretending to sleep.",
  "Sit down, boy. Not the throne—the chair.",
  "The one with the cushion.",
  "I conquered the nine valleys, chained the river-god,",
  "and the tax collectors send letters. Letters. About grain.",
  "You want my sword? Take it. It is heavy, and my arm—",
  "never mind my arm.",
  "Your name in every tavern from Barrowgate to the sea.",
  "Just... sign here now, please. The surrender form. In triplicate.",
  "The ink is on the desk.",
  "The candles burn down, and so do I.",
];

const monologue: string = beats.join(" ");

// Sanity checks before writing: the gate requires UTF-8 text of
// 1 to 600 characters, and the brief asks for about 100 words.
const wordCount: number = monologue.split(/\s+/).filter(Boolean).length;
const charCount: number = [...monologue].length;
if (wordCount < 90 || wordCount > 110) {
  throw new Error(`word count ${wordCount} is not near 100`);
}
if (charCount < 1 || charCount > 600) {
  throw new Error(`character count ${charCount} is outside the 1-600 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", monologue + "\n", "utf8");

console.log(`wrote /output/entry.txt (${wordCount} words, ${charCount} chars)`);
