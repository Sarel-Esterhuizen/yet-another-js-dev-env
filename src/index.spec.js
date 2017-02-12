import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // Node File System

// Example unit test showing how to test using mocha with chai assertions.
describe('Example Unit Test', () => {
  it('Should Pass', () => {
    expect(true).to.equal(true);
  });
});

// Example unit test showing hot to test using jsdom.
describe('index.html', () => {
  it('Should Say Go forth and multiply..', (done) => { // Whenever you do an async test add the done parameter.
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Go forth and multiply..');
      done(); // Need to do this to indicate whether it is safe to evaluate.
      window.close();
    });
  })
});
