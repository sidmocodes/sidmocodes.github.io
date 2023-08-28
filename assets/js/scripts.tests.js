const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const scriptsJS = fs.readFileSync(path.resolve(__dirname, '../assets/js/scripts.js'), 'utf-8');

const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  runScripts: 'dangerously',
});

window.eval(scriptsJS);

const { document } = window;

describe('includeHTML', () => {
  it('should include HTML content', () => {
    // Mock XMLHttpRequest

    window.includeHTML('#some-element', 'some-file.html');

    // Assertions
  });
});

});

