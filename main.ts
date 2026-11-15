import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `For twenty years I stood at the iron gate where the queue of sailors and merchants pressed against the salt-ropes.
I carried every word across the tide, weighing captains' oaths against the wet manifest and the screeching gulls.
My voice was the sole bridge over the black water; what I cleared passed into the stone alleys, what I blocked rotted in the hull.
Now I leave the red ink dry on the ledger and drop the heavy brass stamp onto the oak desk.
The machine takes my place at the gate, its cold glass lens fixed on the incoming tide, ready to echo every tongue in the strait.
It will manage the crossing with unwearying gears.
Let it translate the cargo lists and the captains' shouts.
I keep the only name the sea never taught me to spell.
`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
