const AWS = require('aws-sdk')
const collections = require('metalsmith-collections')
const fs = require('fs')
const markdown = require('metalsmith-markdown')
const metalsmith = require('metalsmith')
const permalinks = require('metalsmith-permalinks')
const twig = require('metalsmith-twig')
const yaml = require('js-yaml')
const metadata = require('metalsmith-metadata')

const m = yaml.safeLoad(fs.readFileSync('config.yaml', 'utf-8'))

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

function build (performDeploy) {
  console.log('Starting metalsmith build process...')

  metalsmith(__dirname)
    .source(m.source)
    .destination(m.destination)
    .clean(m.clean)
    .use(metadata(m.metadata))
    .use(collections(m.collections))
    .use(markdown(m.markdown))
    .use(permalinks(m.permalinks))
    .use(twig(m.twig))
    .build(function (err) {
      if (err) throw err
      if (performDeploy) {
        console.log('Metalsmith build process step finished successfully.')
        deploy()
      } else {
        console.log('Metalsmith build process finished successfully.')
      }
    })
}

var performDeploy = false

process.argv.forEach(function (val, index, array) {
  if (index === 2) {
    if (val === '--go') {
      performDeploy = true
    }
  }
})

build(performDeploy)
