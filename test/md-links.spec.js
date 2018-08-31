const assert = require('chai').assert;
global.window = global;
const mdLinks = require('../lib/md-Links');


describe('mdLinkExtractor(markdown)', () => {
  it('debería ser una función', () => {
    //assert.isFunction(mdLinks.markdownLinkExtractor);
    assert.equal(typeof mdLinks.mdLinkExtractor, 'function');
  });

  describe('mdLinkExtractor(markdown)', () => {

    it('debería retornar un arreglo con los links encontrados en el archivo');

  });
});