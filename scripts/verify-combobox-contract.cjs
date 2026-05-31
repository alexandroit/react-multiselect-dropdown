#!/usr/bin/env node

const { spawn } = require('node:child_process');
const fs = require('node:fs');
const net = require('node:net');
const path = require('node:path');
const puppeteer = require('puppeteer-core');

const repoRoot = path.resolve(__dirname, '..');
const defaultAppDir = path.join(repoRoot, 'docs-src', 'react-19');
const appDir = path.resolve(process.env.STACKLINE_COMBOBOX_APP_DIR || defaultAppDir);
const explicitUrl = process.env.STACKLINE_COMBOBOX_URL;

const viewport = { width: 1366, height: 900 };
const httpWaitTimeoutMs = 30_000;
const viteShutdownTimeoutMs = 2_000;
const serverOutputLimit = 5_000;
const serverPollMs = 250;

const testText = {
  option: 'Portugal',
  searchQuery: 'Bra',
  disabledOption: 'Costa Rica',
  optionAfterDisabledGap: 'Chile'
};

const selectors = {
  styled: {
    trigger: '.preview-card .rmsd-root .rmsd-trigger',
    badges: '.preview-card .rmsd-root .rmsd-badge',
    badgeRemove: '.preview-card .rmsd-root .rmsd-badge-remove',
    menu: '.rmsd-menu',
    search: '.rmsd-menu .rmsd-search-input',
    enabledOptions: '.rmsd-menu .rmsd-option:not(.rmsd-disabled)'
  },
  headless: {
    section: '#headless',
    trigger: '.headless-trigger',
    panel: '.headless-panel',
    search: '.headless-search',
    chips: '.headless-chip',
    chipRemove: '.headless-chip button',
    options: '.headless-panel .headless-option'
  }
};

const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function findChrome() {
  const executable = chromeCandidates.find((candidate) => fs.existsSync(candidate));
  assert(executable, 'Chrome/Chromium executable was not found.');
  return executable;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForHttp(url, server, timeoutMs = httpWaitTimeoutMs) {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < timeoutMs) {
    if (server?.exitCode != null) {
      throw new Error(`Vite exited before serving ${url}.`);
    }

    try {
      const response = await fetch(url);
      if (response.ok || response.status < 500) {
        return;
      }
    } catch (error) {
      lastError = error;
    }

    await sleep(serverPollMs);
  }

  throw new Error(`Timed out waiting for ${url}: ${lastError?.message || 'no response'}`);
}

async function startVite() {
  if (explicitUrl) {
    return { url: explicitUrl, stop: async () => undefined };
  }

  const port = await getFreePort();
  const url = `http://127.0.0.1:${port}/`;
  const viteBin = path.join(appDir, 'node_modules', 'vite', 'bin', 'vite.js');
  assert(fs.existsSync(viteBin), `Vite was not found at ${viteBin}. Run npm install in ${appDir}.`);

  const server = spawn(process.execPath, [viteBin, '--host', '127.0.0.1', '--port', String(port)], {
    cwd: appDir,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  let output = '';
  const appendOutput = (chunk) => {
    output = (output + chunk.toString()).slice(-serverOutputLimit);
  };
  server.stdout.on('data', appendOutput);
  server.stderr.on('data', appendOutput);

  await waitForHttp(url, server);

  return {
    url,
    stop: async () => {
      if (server.exitCode != null) {
        return;
      }

      server.kill('SIGTERM');
      await new Promise((resolve) => {
        const timeout = setTimeout(resolve, viteShutdownTimeoutMs);
        server.once('exit', () => {
          clearTimeout(timeout);
          resolve();
        });
      });

      if (server.exitCode == null) {
        server.kill('SIGKILL');
      }
    },
    getOutput: () => output
  };
}

async function waitForNoSelector(page, selector) {
  await page.waitForFunction(
    (targetSelector) => !document.querySelector(targetSelector),
    {},
    selector
  );
}

async function count(page, selector) {
  return page.$$eval(selector, (elements) => elements.length);
}

async function waitForActiveOption(page) {
  await page.waitForFunction(() => document.activeElement?.getAttribute('role') === 'option');
}

async function waitForActiveClass(page, className) {
  await page.waitForFunction(
    (expectedClassName) => String(document.activeElement?.className || '').includes(expectedClassName),
    {},
    className
  );
}

async function waitForElementCount(page, selector, expected) {
  await page.waitForFunction(
    (targetSelector, expectedCount) => document.querySelectorAll(targetSelector).length === expectedCount,
    {},
    selector,
    expected
  );
}

async function clearSearchInput(page) {
  const modifier = process.platform === 'darwin' ? 'Meta' : 'Control';
  await page.keyboard.down(modifier);
  await page.keyboard.press('KeyA');
  await page.keyboard.up(modifier);
  await page.keyboard.press('Backspace');
}

async function activeElementInfo(page) {
  return page.evaluate(() => {
    const activeElement = document.activeElement;
    return {
      tag: activeElement?.tagName || '',
      id: activeElement?.id || '',
      role: activeElement?.getAttribute('role') || '',
      className: String(activeElement?.className || ''),
      ariaSelected: activeElement?.getAttribute('aria-selected') || '',
      ariaChecked: activeElement?.getAttribute('aria-checked') || '',
      text: activeElement?.textContent?.trim() || ''
    };
  });
}

function assertOptionSelectionState(active, context) {
  assert(active.ariaSelected !== '', `${context} does not expose aria-selected.`);
  assert(active.ariaChecked !== '', `${context} does not expose aria-checked.`);
  assert(
    active.ariaChecked === active.ariaSelected,
    `${context} has mismatched aria-selected=${active.ariaSelected} and aria-checked=${active.ariaChecked}.`
  );
}

async function clickOptionByText(page, selector, expectedText) {
  const handles = await page.$$(selector);

  for (const handle of handles) {
    const text = await page.evaluate((element) => element.textContent || '', handle);
    if (!text.includes(expectedText)) {
      continue;
    }

    await handle.evaluate((element) => element.scrollIntoView({ block: 'center', inline: 'nearest' }));
    const box = await handle.boundingBox();
    assert(box, `Option "${expectedText}" is not visible.`);
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    return;
  }

  throw new Error(`Could not find option containing "${expectedText}".`);
}

async function pressArrowDownUntilText(page, expectedText, maxPresses = 24) {
  for (let index = 0; index < maxPresses; index += 1) {
    await page.keyboard.press('ArrowDown');
    await page.waitForFunction(() => document.activeElement?.getAttribute('role') === 'option');

    const active = await activeElementInfo(page);
    assert(
      !active.text.includes(testText.disabledOption),
      `Keyboard focus landed on disabled ${testText.disabledOption}.`
    );

    if (active.text.includes(expectedText)) {
      return active;
    }
  }

  const active = await activeElementInfo(page);
  throw new Error(`Expected focus to reach ${expectedText}, got "${active.text}".`);
}

async function verifyStyledCombobox(page) {
  const { trigger, badges, badgeRemove, menu, search, enabledOptions } = selectors.styled;

  await page.waitForSelector(trigger, { visible: true });
  const initialBadges = await count(page, badges);
  assert(initialBadges >= 2, `Expected at least two selected badges, found ${initialBadges}.`);

  await page.click(trigger);
  await page.waitForSelector(search, { visible: true });

  let active = await activeElementInfo(page);
  assert(active.className.includes('rmsd-search-input'), 'Styled search input did not receive focus after open.');

  await clickOptionByText(page, enabledOptions, testText.option);
  await waitForActiveOption(page);
  active = await activeElementInfo(page);
  assert(
    active.text.includes(testText.option),
    `Styled mouse click focused "${active.text}", expected ${testText.option}.`
  );
  await waitForElementCount(page, badges, initialBadges + 1);

  await page.keyboard.press('Space');
  await waitForActiveOption(page);
  active = await activeElementInfo(page);
  assert(active.text.includes(testText.option), 'Styled Space after mouse click did not stay on clicked option.');
  await waitForElementCount(page, badges, initialBadges);

  await page.click(search);
  await waitForActiveClass(page, 'rmsd-search-input');

  await page.type(search, testText.searchQuery);
  await page.keyboard.press('Backspace');
  const afterQueryBackspace = await count(page, badges);
  assert(
    afterQueryBackspace === initialBadges,
    'Backspace with a non-empty query removed a selected badge.'
  );

  await clearSearchInput(page);
  await page.waitForFunction(
    (selector) => document.querySelector(selector)?.value === '',
    {},
    search
  );

  await page.keyboard.press('Backspace');
  const afterEmptySearchBackspace = await count(page, badges);
  assert(
    afterEmptySearchBackspace === initialBadges,
    'Backspace with an empty search query removed a selected badge by default.'
  );

  await page.focus(badgeRemove);
  await page.keyboard.press('Backspace');
  await waitForElementCount(page, badges, initialBadges - 1);

  await page.keyboard.press('Escape');
  await waitForNoSelector(page, menu);
  const afterEscape = await count(page, badges);
  assert(afterEscape === initialBadges - 1, 'Escape closed the list but changed selected values.');

  await page.click(trigger);
  await page.waitForSelector(search, { visible: true });
  await waitForActiveClass(page, 'rmsd-search-input');
  await page.keyboard.press('ArrowDown');
  await waitForActiveOption(page);

  active = await activeElementInfo(page);
  assert(active.id, 'Focused styled option does not have a stable id for aria-activedescendant.');
  assertOptionSelectionState(active, 'Focused styled option');

  await page.keyboard.press('Space');
  await waitForActiveOption(page);
  active = await activeElementInfo(page);
  assert(
    active.className.includes('rmsd-option'),
    'Styled Space selection moved focus away from the active option.'
  );

  await page.keyboard.press('Space');
  await waitForActiveOption(page);
  await page.keyboard.press('ArrowDown');
  await waitForActiveOption(page);

  const afterDisabledGap = await pressArrowDownUntilText(page, testText.optionAfterDisabledGap);

  await page.keyboard.press('Space');
  await page.waitForFunction(
    (expectedId) => document.activeElement?.id === expectedId,
    {},
    afterDisabledGap.id
  );
  active = await activeElementInfo(page);
  assert(
    active.text.includes(testText.optionAfterDisabledGap),
    `Styled Space selection after a disabled option moved focus to "${active.text}".`
  );
}

async function verifyHeadlessCombobox(page) {
  await page.evaluate(
    (selector) => document.querySelector(selector)?.scrollIntoView({ block: 'start' }),
    selectors.headless.section
  );

  const { trigger, panel, search, chips, chipRemove, options } = selectors.headless;

  await page.waitForSelector(trigger, { visible: true });
  const initialChips = await count(page, chips);
  assert(initialChips >= 2, `Expected at least two headless chips, found ${initialChips}.`);

  await page.click(trigger);
  await page.waitForSelector(panel, { visible: true });
  await waitForActiveClass(page, 'headless-search');

  let active = await activeElementInfo(page);
  assert(active.className.includes('headless-search'), 'Headless search input did not receive focus after open.');

  await clickOptionByText(page, options, testText.option);
  await waitForActiveOption(page);
  active = await activeElementInfo(page);
  assert(
    active.text.includes(testText.option),
    `Headless mouse click focused "${active.text}", expected ${testText.option}.`
  );
  await waitForElementCount(page, chips, initialChips + 1);

  await page.keyboard.press('Space');
  await waitForActiveOption(page);
  active = await activeElementInfo(page);
  assert(active.text.includes(testText.option), 'Headless Space after mouse click did not stay on clicked option.');
  await waitForElementCount(page, chips, initialChips);

  await page.click(search);
  await waitForActiveClass(page, 'headless-search');

  await page.type(search, testText.searchQuery);
  await page.keyboard.press('Backspace');
  const afterQueryBackspace = await count(page, chips);
  assert(
    afterQueryBackspace === initialChips,
    'Headless Backspace with a non-empty query removed a selected chip.'
  );

  await clearSearchInput(page);
  await page.waitForFunction(
    (selector) => document.querySelector(selector)?.value === '',
    {},
    search
  );

  await page.keyboard.press('Backspace');
  const afterEmptySearchBackspace = await count(page, chips);
  assert(
    afterEmptySearchBackspace === initialChips,
    'Headless Backspace with an empty search query removed a selected chip by default.'
  );

  await page.focus(chipRemove);
  await page.keyboard.press('Delete');
  await waitForElementCount(page, chips, initialChips - 1);

  await page.keyboard.press('Escape');
  await waitForNoSelector(page, panel);
  const afterEscape = await count(page, chips);
  assert(afterEscape === initialChips - 1, 'Headless Escape closed the list but changed selected values.');

  await page.click(trigger);
  await page.waitForSelector(panel, { visible: true });
  await waitForActiveClass(page, 'headless-search');
  await page.keyboard.press('ArrowDown');
  await waitForActiveOption(page);

  active = await activeElementInfo(page);
  assert(active.id, 'Focused headless option does not have a stable id.');
  assertOptionSelectionState(active, 'Focused headless option');

  await page.keyboard.press('Space');
  await waitForActiveOption(page);
  active = await activeElementInfo(page);
  assert(
    active.className.includes('headless'),
    'Headless Space selection moved focus away from the active option.'
  );

  await page.keyboard.press('Space');
  await waitForActiveOption(page);
  await page.keyboard.press('ArrowDown');
  await waitForActiveOption(page);
}

async function main() {
  const vite = await startVite();
  let browser;

  try {
    browser = await puppeteer.launch({
      executablePath: findChrome(),
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport(viewport);
    await page.goto(vite.url, { waitUntil: 'networkidle0' });

    await verifyStyledCombobox(page);
    await verifyHeadlessCombobox(page);

    console.log('Combobox contract verified: focus, Backspace, Escape, aria-selected/aria-checked, and headless flow.');
  } catch (error) {
    if (vite.getOutput) {
      console.error(vite.getOutput());
    }
    throw error;
  } finally {
    await browser?.close();
    await vite.stop();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
