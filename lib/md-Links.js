let name = '';
const NewJson = [];
const extractLinks = (() => {

});

const Marked = require('marked');

// Función necesaria para extraer los links usando marked
// (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// Recibe texto en markdown y retorna sus links en un arreglo

exports.mdLinkExtractor = (nameFile, markdown) => {
  const links = [];
  const dtsToJson = [];
  const renderer = new Marked.Renderer();
  name = nameFile;
  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  renderer.link = (href, title, text) => {
    links.push({
      href: href,
      text: text,
      title: title,
    });
    dtsToJson.push({
      href: href,
      text: text,
    });
  };
  renderer.image = (href, title, text)=> {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, '');
    links.push({
      href: href,
      text: text,
      title: title,
    });
    dtsToJson.push({
      href: href,
      text: text,
    });
  };
  Marked(markdown, { renderer: renderer });
  creatApi(dtsToJson);
  return links;
};

const creatApi = ((dtsToJson)=>{  
  dtsToJson.forEach(element => {
    if (element !== []) {
      NewJson.push({
        nameFile: name,
        href: element.href,
        text: element.text,
        line: 'linea1',
        file: 'ruta',
      });
    }
  });
  //console.log('datos para el json: ' + JSON.stringify(NewJson));
});