# Changelog

All notable changes to this project are documented in this file.

## Unreleased

- Moved exact-version dependency records to `package.fixture.json`, repaired
  their validators, and added an offline catalog contract to keep historical
  metadata out of active dependency alerts.

## [19.1.5] - 2026-08-19

### Changed
- Updated the tested React runtime to 19.2.8 and refreshed matching React type packages.
- Updated the browser contract runner to Puppeteer Core 25.8.0, removing known vulnerable transitive development dependencies.
- Added reproducible Node 22/24 CI, package-content validation, public export smoke tests, and release artifacts with SHA-512 checksums.
- Updated the React 19 documentation build to the current Vite 8 toolchain.
- Refreshed the React 19 playground and fixed source loading and navigation when it is hosted below the public documentation path.
- Split ESM and CommonJS declaration conditions so `import` resolves `.d.ts` and `require` resolves `.d.cts`.

### Compatibility
- Kept the public component, hooks, factory, settings, slots, refs, ESM/CommonJS exports, and React 19 peer range unchanged.
