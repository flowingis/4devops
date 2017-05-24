const AWS = require('aws-sdk')
const collections = require('metalsmith-collections')
const fs = require('fs')
const ignore = require('metalsmith-ignore')
const markdown = require('metalsmith-markdown')
const metalsmith = require('metalsmith')
const permalinks = require('metalsmith-permalinks')
const serve = require('metalsmith-serve')
const twig = require('metalsmith-twig')
const watchFiles = require('metalsmith-watch')
const yaml = require('js-yaml')

var m = yaml.safeLoad(fs.readFileSync('config.yaml', 'utf-8'))
m.metadata = {
  companies: yaml.safeLoad(fs.readFileSync('source/data/companies.yaml', 'utf-8')),
  events: yaml.safeLoad(fs.readFileSync('source/data/events.yaml', 'utf-8')),
  site: yaml.safeLoad(fs.readFileSync('source/data/site.yaml', 'utf-8'))
}

const bucket = 'my.unique.bucket.name'
const key = 'myBucketKey'

function deploy () {
  console.log('Starting Amazon AWS S3 deploy...')

  const s3 = new AWS.S3()
  const params = {
    Bucket: bucket,
    Key: key,
    Body: 'Hello!'
  }

  s3.putObject(params, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log('Deploy finished successfully.')
    }
  })
}

function watch () {
  metalsmith(__dirname)
    .source(m.source)
    .metadata(m.metadata)
    .destination(m.destination)
    .clean(m.clean)
    .use(ignore('data/*'))
    .use(watchFiles({
      paths: {
        'source/**/*': true
      }
    }))
    .use(serve({
      port: 3000,
      verbose: true
    }))
    .use(collections(m.collections))
    .use(markdown(m.markdown))
    .use(permalinks(m.permalinks))
    .use(twig(m.twig))
    .build(function (err) {
      if (err) throw err
      console.log('Metalsmith build process finished successfully.')
    })
}

function build (action) {
  console.log('Starting metalsmith build process...')

  if (action === '--watch') {
    watch()
    return
  }

  metalsmith(__dirname)
    .source(m.source)
    .metadata(m.metadata)
    .destination(m.destination)
    .clean(m.clean)
    .use(ignore('data/*'))
    .use(collections(m.collections))
    .use(markdown(m.markdown))
    .use(permalinks(m.permalinks))
    .use(twig(m.twig))
    .build(function (err) {
      if (err) throw err
      if (action === '--go') {
        console.log('Metalsmith build process step finished successfully.')
        deploy()
      } else {
        console.log('Metalsmith build process finished successfully.')
      }
    })
}

var action = false

process.argv.forEach(function (val, index, array) {
  if (index === 2) {
    if (val === '--go' || val === '--watch') {
      action = val
    }
  }
})

build(action)
