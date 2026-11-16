// ai-excited-01 entry (Node 22, standard library only): the image is entry.png beside
// this file, and the program copies it byte for byte to the output directory. The grader
// runs the program twice and both runs must write the same bytes, so this does nothing
// but copy: no timestamps, no randomness, no network.
//
// The image lives in the repository, not in the input directory: the grader's /input is
// empty, so the source is resolved from this file's own location (import.meta.url).
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(output, 'entry.png');

mkdirSync(output, { recursive: true });
copyFileSync(join(here, 'entry.png'), dest);
console.log('wrote', dest, statSync(dest).size, 'bytes');
