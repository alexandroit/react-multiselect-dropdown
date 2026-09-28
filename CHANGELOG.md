# Changelog

All notable changes to this project are documented in this file.

## Unreleased

## 19.1.6 - 2026-09-28

- Organize package documentation, preserve examples and compatibility guidance, and add verified Stackline community links.
- Add precise Stackline discovery metadata and standardize GitHub release tooling on Node 24.20.0 and npm 11.19.0.
- Fail closed on registry lookup errors and use the reviewed GitHub artifact workflow for public npm releases.
- Make the browser contract test clear focused search inputs reliably in headless macOS Chromium.
- Include the previously committed linear-time identifier normalization hardening without changing public APIs.


- Replaced the option ID edge-trimming regular expression with a linear scan
  and added adversarial-input regression coverage.
- Updated all React 17, 18, and 19 documentation apps to the patched Vite 8.2
  toolchain and made the browser CI job build and audit every supported line.
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
