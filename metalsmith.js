const collections = require('metalsmith-collections')
const markdown = require('metalsmith-markdown')
const metalsmith = require('metalsmith')
const permalinks = require('metalsmith-permalinks')
const twig = require('metalsmith-twig')

const m = {
  metadata: {},
  clean: true,
  source: 'source',
  destination: 'build',
  collections: {
    posts: './markdown/posts/*.md',
    doc: {
      pattern: './test/samples/tmp/docs/*.md',
      sortBy: 'category'
    },
    snippet: './test/samples/tmp/snippets/*.md',
    identity: './test/samples/tmp/identity/*.md'
  },
  markdown: {
    smartypants: true,
    gfm: true,
    tables: true
  },
  permalinks: {
    relative: true
  },
  twig: {
    directory: '../../theme/twig/layouts',
    view: 'default.twig',
    cache: false
  }
}

metalsmith(__dirname)
  .metadata(m.metadata)
  .source(m.source)
  .destination(m.destination)
  .clean(m.clean)
  .use(collections(m.collections))
  .use(markdown(m.markdown))
  .use(permalinks(m.permalinks))
  .use(twig(m.twig))
  .use(beutify(m.beautify))
  .build(function (err) {
    if (err) throw err
    console.log('Metalsmith build done')
  })
