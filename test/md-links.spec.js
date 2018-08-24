const assert = require('chai').assert;
global.window = global;
const mdLinks = require('../lib/md-Links');


  describe('markdownLinkExtractor(markdown)', ()=>{
    it('debería ser una función', () => {
      //assert.isFunction(mdLinks.markdownLinkExtractor);
      assert.equal(typeof mdLinks.markdownLinkExtractor, 'function');
    });

  })
  


