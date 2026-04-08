import { releaseReactLine } from './release-react-line.js';

const publish = !process.argv.slice(2).includes('--no-publish');

[17, 18, 19].forEach((line) => {
  releaseReactLine(line, { publish });
});
