const dedent = require('dedent');
const find = require('unist-util-find');
const plugin = require('../index');
const Remark = require('remark');


describe('gatsby-remark-containers', () => {
  let remark;

  beforeEach(() => {
    remark = new Remark().data('settings', {
      commonmark: true,
      footnotes: true,
      pedantic: true
    });
    const parserPlugins = plugin.setParserPlugins();
    const parser = parserPlugins[0];
    remark.use(parser);
  });

  it('container', () => {
    const markdownAST = remark.parse(dedent`
::: aside
# Hello World

What a day it is.
:::
    `);
    const transformed = plugin({ markdownAST });
    expect(find(transformed, { type: 'aside' })).toBeTruthy();
  });

  it('leaves other nodes alone', async () => {
    const markdownAST = remark.parse(dedent`
# Hello World
a regular sentence
not a ::: aside
not a ::: aisde ::: article
- list item
- other list item
1. numbered
1. other numbered
    `);

    const transformed = await plugin({
      markdownAST: Object.assign({}, markdownAST)
    });

    expect(transformed).toEqual(markdownAST);
  });
});

