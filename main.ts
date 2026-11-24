// Till Firmware Do Us Part — entry program (Node 22, stdlib only).
// Writes one original one-line robot wedding vow to /output/entry.txt.
// The vow: built to last five years, intending to love for six —
// planned obsolescence defied by a vow.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const VOW =
  'They built me to last five years; I intend to love you for six.';

// Writes exactly the vow, no trailing newline: the gate counts characters
// (1-200), so the file is 63 characters / 63 bytes, byte-identical every run.
// Self-check mirrors the sealed gate (1-200 chars, not whitespace only) so a
// bad edit fails loudly here instead of silently in the grader's sandbox.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (VOW.length < 1 || VOW.length > 200) {
  throw new Error(`vow must be 1-200 characters, got ${VOW.length}`);
}
if (VOW.trim().length === 0) {
  throw new Error('vow must not be whitespace only');
}
writeFileSync(join(outDir, 'entry.txt'), VOW, 'utf8');
