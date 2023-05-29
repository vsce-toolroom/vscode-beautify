'use strict';

const vscode = require('vscode');
const Mocha = require('mocha');

const files = [
  require.resolve('./extension.test'),
  require.resolve('./issues.test')
];

module.exports.run = async function() {
  vscode.window.showInformationMessage('Start all tests.');

  const mocha = new Mocha({ ui: 'bdd', reporter: 'spec' });

  return new Promise((c, x) => {
    files.forEach(f => mocha.addFile(f));

    try {
      mocha.run(failures => {
        if (failures > 0) {
          x(new Error(`${failures} tests failed.`));
        } else {
          c();
        }
      });
    } catch (e) {
      console.error(e);
      x(e);
    }
  });
};