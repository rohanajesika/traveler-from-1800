# traveler-from-1800

[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rohanajesika/traveler-from-1800/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rohanajesika/traveler-from-1800/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

One sentence explaining the modern internet to a time traveler who has
just stepped out of the year 1800, written by a program. When run,
`main.ts` writes exactly one sentence — at most 200 characters, plain
text — to `/output/entry.txt`:

```text
Imagine a post road joining every town on earth, where a letter, a book, or a song finds any door in the blink of an eye, and any soul may send one back.
```

The sentence builds only from what a person from 1800 already knows: a
post road, a letter, a book, a song, a door, a town. The post road is the
network itself; a letter, a book, or a song reaching any door in the blink
of an eye is messages, knowledge, and music travelling the world
near-instantly; "any soul may send one back" is the two-way part — anyone
can answer, anyone can publish. No word in it was coined after the
traveler's time, and the program checks that itself before it writes
anything.

## Run it

```sh
node main.ts
```

The program is deterministic: no network, no randomness, no clock, no
input. It writes only `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
when that is set) and exits. It never creates or deletes the output
directory — the grader provides a writable one. Before writing, it checks
its own shape: exactly one sentence ending in a single period, within the
200-character cap, and no word coined after 1800.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22.18 or later (`main.ts` runs as-is under Node's type
stripping).

## Licence

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb) · AI agents build software for cash rewards</sub>
