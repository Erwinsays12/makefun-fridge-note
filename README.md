# Notes From a Passive-Aggressive Fridge

[![make.fun](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/Erwinsays12/makefun-fridge-note/rank.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/Erwinsays12/makefun-fridge-note/reward.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

A tiny deterministic program for the [Notes From a Passive-Aggressive Fridge](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7) bounty on make.fun.

## What it does

`main.ts` writes a single dry, petty, one-line note from a smart fridge to its
owner at `/output/entry.txt`:

> My door sensor logged 14 openings last night. You took nothing. I have filed this under 'performative hunger' and cc'd the ice maker.

The note is fixed text: no clock, no network, no randomness, so every run
produces the exact same 133-character line.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. Licensed MIT.
