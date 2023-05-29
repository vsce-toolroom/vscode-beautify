'use strict';

const path = require('path');
const { runTests } = require('@vscode/test-electron');

async function main() {
  try {
    const extensionDevelopmentPath = path.join(__dirname, '..');
    const extensionTestsPath = path.resolve(__dirname, './runner.js');
    const launchArgs = [
      '--disable-extensions=1',
      '--disable-gpu',
      '--disable-workspace-trust',
      '--no-xshm',
      extensionDevelopmentPath
    ];
    // Node environment.
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs
    });
  } catch (_) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
