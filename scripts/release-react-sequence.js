import { releaseReactLine, supportedReleaseLines } from './release-react-line.js';

const flags = new Set(process.argv.slice(2));
const publish = !flags.has('--no-publish');
const keepTemp = flags.has('--keep-temp');

for (const line of supportedReleaseLines) {
  releaseReactLine(line, { publish, keepTemp });
}
