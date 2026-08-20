const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const repoRoot = path.resolve(__dirname, '..');

test('CommonJS distribution exposes the public API', () => {
  const library = require(path.join(repoRoot, 'dist', 'index.cjs'));

  for (const exportName of ['MultiSelectDropdown', 'ReactMultiSelectDropdown']) {
    assert.equal(typeof library[exportName], 'object', `${exportName} is not a React component.`);
  }

  for (const exportName of [
    'createMultiSelectDropdown',
    'useMultiSelectDropdown',
    'useMultiSelectState'
  ]) {
    assert.equal(typeof library[exportName], 'function', `${exportName} is not callable.`);
  }
});

test('ES module distribution exposes the public API', async () => {
  const library = await import(path.join(repoRoot, 'dist', 'index.js'));

  assert.equal(typeof library.MultiSelectDropdown, 'object');
  assert.equal(typeof library.createMultiSelectDropdown, 'function');
  assert.equal(typeof library.useMultiSelectDropdown, 'function');
  assert.equal(typeof library.useMultiSelectState, 'function');
});

test('package metadata preserves React 19 compatibility', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));

  assert.equal(packageJson.exports['.'].import.default, './dist/index.js');
  assert.equal(packageJson.exports['.'].import.types, './dist/index.d.ts');
  assert.equal(packageJson.exports['.'].require.default, './dist/index.cjs');
  assert.equal(packageJson.exports['.'].require.types, './dist/index.d.cts');
  assert.equal(packageJson.peerDependencies.react, '>=19.0.0 <20.0.0');
  assert.equal(packageJson.peerDependencies['react-dom'], '>=19.0.0 <20.0.0');
  assert.equal(packageJson.sideEffects, false);
});
