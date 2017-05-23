var AWS = require('aws-sdk');
var fs = require('fs');
path = require('path');
const download = require('download');

exports.handler = function(event, context) {
    console.log('Received event: ', JSON.stringify(event, null, 2));

    download('https://github.com/ideatosrl/4devops/archive/master.zip').then(data => {
        fs.writeFileSync('/tmp/4devops-archive.zip', data);
        console.log("Wrote ");
    
            fs.readFile('/tmp/4devops-archive.zip', function (err, data) {
                if (err) throw err;

                var params = {Bucket: 'it-4devops-code', Body: data, Key: '4devops-archive.zip'};
                var s3 = new AWS.S3();
                s3.upload(params, function(err, data) {
                    console.log(err, data);
                });
            });

    }).catch(function (err) {
    console.log(err);
    });
}