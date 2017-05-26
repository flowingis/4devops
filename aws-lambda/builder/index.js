const download = require('download');
var fs = require('fs');
var extract = require('extract-zip')
const yaml = require('js-yaml')
const markdown = require('metalsmith-markdown')
const metadata = require('metalsmith-metadata')
const metalsmith = require('metalsmith')
const permalinks = require('metalsmith-permalinks')
const twig = require('metalsmith-twig')
const browserSync = require('metalsmith-browser-sync')
const collections = require('metalsmith-collections')
var s3 = require('s3');
var AWS = require('aws-sdk');
const ignore = require('metalsmith-ignore')

exports.handler = function(event, context) {



download('https://s3.eu-central-1.amazonaws.com/it-4devops-code/4devops-archive.zip').then(data => {
        fs.writeFileSync('/tmp/4devops-archive.zip', data);
        console.log("Writed ");

        const stats = fs.statSync("/tmp/4devops-archive.zip")
        const fileSizeInBytes = stats.size
        console.log(fileSizeInBytes+ 'bytes');

        var extract = require('extract-zip')
        extract("/tmp/4devops-archive.zip", {dir: "/tmp/4devops-archive"}, function (err) {
            if (err) throw err;
            console.log('extracted');
            var m = yaml.safeLoad(fs.readFileSync('/tmp/4devops-archive/4devops-master/config.yaml'))
            m.metadata = {
              companies: yaml.safeLoad(fs.readFileSync('/tmp/4devops-archive/4devops-master/source/data/companies.yaml', 'utf-8')),
              events: yaml.safeLoad(fs.readFileSync('/tmp/4devops-archive/4devops-master/source/data/events.yaml', 'utf-8')),
              site: yaml.safeLoad(fs.readFileSync('/tmp/4devops-archive/4devops-master/source/data/site.yaml', 'utf-8'))
            }
            metalsmith('/tmp/4devops-archive/4devops-master')
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
             console.log('Metalsmith build process finished successfully.');
            var awsS3Client = new AWS.S3();
            var client = s3.createClient({
                s3Client: awsS3Client
            });
            var uploader_params = {localDir: "/tmp/4devops-archive/4devops-master/build", deleteRemoved: true, s3Params: {Bucket: "it-4devops",},};
            var uploader = client.uploadDir(uploader_params);
            uploader.on('error', function(err) {
              console.error("unable to sync:", err.stack);
            });
            uploader.on('progress', function() {
              console.log("progress", uploader.progressAmount, uploader.progressTotal);
            });
            uploader.on('end', function() {
              console.log("done uploading");
            });
            })

});
});
}
