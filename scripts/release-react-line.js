import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const packageName = '@stackline/react-multiselect-dropdown';
const supportedReleaseLines = [17, 18, 19];

const releaseLines = {
  17: {
    version: '17.0.0',
    react: '17.0.2',
    reactDom: '17.0.2',
    peerRange: '>=17.0.0 <18.0.0'
  },
  18: {
    version: '18.0.0',
    react: '18.3.1',
    reactDom: '18.3.1',
    peerRange: '>=18.0.0 <19.0.0'
  },
  19: {
    version: '19.0.0',
    react: '19.2.4',
    reactDom: '19.2.4',
    peerRange: '>=19.0.0 <20.0.0'
  }
};

function copyDir(sourceDir, targetDir) {
  fs.cpSync(sourceDir, targetDir, { recursive: true });
}

function runNpm(args, cwd, options = {}) {
  const result = spawnSync('npm', args, {
    cwd,
    stdio: 'inherit',
    env: {
      ...process.env,
      npm_config_yes: 'true'
    },
    ...options
  });

  if (result.status !== 0) {
    throw new Error(`npm ${args.join(' ')} failed with exit code ${result.status}.`);
  }
}

function npmVersionExists(version) {
  const result = spawnSync('npm', ['view', `${packageName}@${version}`, 'version', '--json'], {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore']
  });

  if (result.status !== 0) {
    return false;
  }

  return result.stdout.trim().replace(/^"|"$/g, '') === version;
}

function assertSupportedLine(line) {
  if (!releaseLines[line]) {
    throw new Error(`Unsupported React release line: ${line}. Use one of: ${supportedReleaseLines.join(', ')}.`);
  }
}

function createReleasePackage(line) {
  assertSupportedLine(line);

  const release = releaseLines[line];
  const distDir = path.join(rootDir, 'dist');

  if (!fs.existsSync(distDir)) {
    throw new Error('Build output not found. Run `npm run build` before releasing.');
  }

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `stackline-react-multiselect-dropdown-${release.version}-`));
  const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));

  copyDir(distDir, path.join(tempDir, 'dist'));
  fs.copyFileSync(path.join(rootDir, 'README.md'), path.join(tempDir, 'README.md'));
  fs.copyFileSync(path.join(rootDir, 'LICENSE'), path.join(tempDir, 'LICENSE'));

  packageJson.version = release.version;
  packageJson.peerDependencies.react = release.peerRange;
  packageJson.peerDependencies['react-dom'] = release.peerRange;
  packageJson.devDependencies.react = release.react;
  packageJson.devDependencies['react-dom'] = release.reactDom;
  packageJson.publishConfig = {
    ...(packageJson.publishConfig || {}),
    access: 'public'
  };

  fs.writeFileSync(path.join(tempDir, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`);

  return {
    release,
    tempDir
  };
}

export function releaseReactLine(line, options = { publish: true, keepTemp: false }) {
  assertSupportedLine(line);

  const release = releaseLines[line];
  console.log(`\n=== React ${line} · ${release.version} ===`);

  if (options.publish && npmVersionExists(release.version)) {
    console.log(`${packageName}@${release.version} is already published. Skipping npm publish.`);
    return;
  }

  const bundle = createReleasePackage(line);

  try {
    runNpm(['pack'], bundle.tempDir);

    if (options.publish) {
      runNpm(['publish', '--access', 'public'], bundle.tempDir);
      console.log(`Published ${packageName}@${release.version}.`);
    }
  } finally {
    if (!options.keepTemp) {
      fs.rmSync(bundle.tempDir, { recursive: true, force: true });
    }
  }
}

function parseCli(argv) {
  let line;
  const flags = new Set();

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--line') {
      line = Number(argv[index + 1]);
      if (!Number.isInteger(line)) {
        throw new Error('The --line option requires one of: 17, 18, 19.');
      }
      index += 1;
      continue;
    }

    flags.add(arg);
  }

  if (!line || !releaseLines[line]) {
    throw new Error('Usage: node scripts/release-react-line.js --line <17|18|19> [--no-publish] [--keep-temp]');
  }

  return {
    line,
    options: {
      publish: !flags.has('--no-publish'),
      keepTemp: flags.has('--keep-temp')
    }
  };
}

if (path.resolve(process.argv[1] || '') === __filename) {
  const { line, options } = parseCli(process.argv.slice(2));
  releaseReactLine(line, options);
}

export { releaseLines, supportedReleaseLines };
