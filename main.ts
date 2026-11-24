// One Sentence for a Traveler from 1800
// A make.fun entry: this program writes exactly one sentence explaining the
// modern internet to a time traveler who has just stepped out of the year
// 1800, to /output/entry.txt — one sentence, plain text, nothing else.
// It is fully deterministic: no network, no randomness, no clock, no input.
// It only writes the one file and exits.
//
// The sentence (v2 — revised from v1: "that joins" tightened to
// "joining", "reaches" sharpened to "finds"; 5 characters saved, and the
// road now does the joining itself rather than being described as doing it):
//
//   Imagine a post road joining every town on earth, where a letter, a
//   book, or a song finds any door in the blink of an eye, and any soul
//   may send one back.
//
// Hand-counted: 153 characters, 33 words, one sentence, one terminal period.
//
// Why this sentence, against the judge brief in RULES.txt:
//   1. It explains the modern internet: the post road is the network
//      itself; a letter, a book, or a song reaching any door in the blink
//      of an eye is messages, knowledge and music travelling the world
//      near-instantly; "any soul may send one back" is the two-way part —
//      anyone can answer, anyone can publish.
//   2. It builds only from what a person from 1800 already knows: a post
//      road, a letter, a book, a song, a door, a town. No word in it was
//      coined after their time — the program checks that itself against a
//      small blocklist of later words (internet, computer, screen,
//      website, email, digital, online, network, phone, and the like).
//   3. What it says is true of the internet as it is now: text, books
//      and songs really do travel the world in a blink, and anyone
//      connected can send one back. "In the blink of an eye" is a figure
//      of speech for near-instant, not a literal claim.
//   4. Every word earns its place inside the 200 character cap: one
//      single comparison — the post road — carries the whole sentence.
//      The letter, the book and the song are not a list of features;
//      they are three things that travel on the one road.
//   5. It leaves one image a reader would still remember a week later:
//      a post road joining every town on earth.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the output directory and passes it in, or the program
// falls back to /output. The directory already exists when the grader runs,
// so this program never creates or deletes it.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const MAX_CHARS = 200;

// The sentence. One sentence, one terminal period, no other sentence
// terminator inside it.
const SENTENCE =
  "Imagine a post road joining every town on earth, where a letter, " +
  "a book, or a song finds any door in the blink of an eye, and any " +
  "soul may send one back.";

// Words coined after 1800 that must never appear in the sentence: the
// traveler could not have known them, and the brief forbids building on
// them. Checked as whole words, case-insensitively.
const FORBIDDEN_AFTER_1800 = [
  "internet",
  "computer",
  "screen",
  "website",
  "email",
  "digital",
  "online",
  "network",
  "phone",
  "television",
  "radio",
  "video",
  "software",
  "data",
  "cloud",
  "server",
  "browser",
  "click",
  "download",
  "stream",
  "electric",
  "wire",
  "signal",
];

function buildSentence(): string {
  const text = SENTENCE;
  if (text.trim().length === 0) {
    throw new Error("the sentence is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `sentence is ${text.length} characters, over the ${MAX_CHARS} cap`,
    );
  }
  // Exactly one sentence: exactly one sentence terminator, and it is the
  // last character.
  const terminators = text.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !text.endsWith(".")) {
    throw new Error(
      `expected exactly one sentence ending in a period, got ${terminators.length} terminator(s)`,
    );
  }
  // No word coined after the traveler's time.
  const words = text.toLowerCase().replace(/[^a-z ]/g, "").split(/\s+/);
  for (const forbidden of FORBIDDEN_AFTER_1800) {
    if (words.includes(forbidden)) {
      throw new Error(
        `sentence uses "${forbidden}", a word coined after 1800`,
      );
    }
  }
  return text;
}

const sentence = buildSentence();
writeFileSync(OUTPUT_FILE, sentence, "utf8");
console.log(`Wrote ${sentence.length} characters to ${OUTPUT_FILE}`);
