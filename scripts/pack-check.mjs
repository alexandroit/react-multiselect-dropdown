import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const report = JSON.parse(execFileSync(
  npmCommand,
  ['pack', '--dry-run', '--json', '--ignore-scripts'],
  { cwd: rootDir, encoding: 'utf8' }
))[0];

if (packageJson.version !== '19.1.5') {
  throw new Error(`Expected package version 19.1.5, found ${packageJson.version}.`);
}

for (const peer of ['react', 'react-dom']) {
  if (packageJson.peerDependencies[peer] !== '>=19.0.0 <20.0.0') {
    throw new Error(`Unexpected ${peer} peer range: ${packageJson.peerDependencies[peer]}.`);
  }
}

if (packageJson.dependencies && Object.keys(packageJson.dependencies).length > 0) {
  throw new Error('The React package must not introduce runtime dependencies.');
}

const files = new Set(report.files.map((entry) => entry.path));
for (const requiredFile of [
  'LICENSE',
  'README.md',
  'dist/index.cjs',
  'dist/index.d.cts',
  'dist/index.d.ts',
  'dist/index.js',
  'package.json'
]) {
  if (!files.has(requiredFile)) {
    throw new Error(`Package archive is missing ${requiredFile}.`);
  }
}

for (const forbiddenFile of [...files].filter((file) => file.endsWith('.map'))) {
  throw new Error(`Package archive unexpectedly includes source map ${forbiddenFile}.`);
}

console.log(`Validated ${packageJson.name}@${packageJson.version}: ${report.entryCount} files, ${report.unpackedSize} unpacked bytes.`);
