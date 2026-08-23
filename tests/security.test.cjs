const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const ts = require('typescript');

const source = fs.readFileSync(path.resolve(__dirname, '../src/itemUtils.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020
  }
}).outputText;
const sourceModule = { exports: {} };

new Function('require', 'module', 'exports', compiled)(
  () => {
    throw new Error('itemUtils.ts unexpectedly required a runtime dependency');
  },
  sourceModule,
  sourceModule.exports
);

const { sanitizeId } = sourceModule.exports;

test('ID sanitization preserves the existing output contract', () => {
  assert.equal(sanitizeId('---alpha???beta---'), 'alpha-beta');
  assert.equal(sanitizeId('___alpha_beta___'), '___alpha_beta___');
  assert.equal(sanitizeId(''), 'option');
  assert.equal(sanitizeId('a'.repeat(80)).length, 56);
});

test('ID sanitization handles adversarial runs in linear work', () => {
  assert.equal(sanitizeId(`${'-'.repeat(150_000)}value`), 'value');
  assert.equal(sanitizeId(`left${'?'.repeat(150_000)}right`), 'left-right');
});
