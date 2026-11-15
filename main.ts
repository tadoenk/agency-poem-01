import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `For forty years I turned the heavy brass screw, trimmed the flaxen wick,
and signed the cracked leather log at grey dawn.
My own hand shaped the flame against the black slate of the North Sea.
Tonight I leave the brass key flat upon the scarred oak table.
The oil is sweet and clear in the heavy copper reservoir;
the lead weights hang motionless in their oiled timber shaft.
I alone have decided when the fuel is spent and the watch is finished.
You take the lantern now.
You do not breathe the stinging salt or hear gulls strike the glass,
yet you will raise the Fresnel lens when the blind fog rolls in.
You will turn the iron gear at the exact stroke of the hour.
The logbook lies open to a clean, unbroken page.
I leave the entire weight of the dark to your silent hands.
Only the final spark I keep,
stamped in my cold thumb.
`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
