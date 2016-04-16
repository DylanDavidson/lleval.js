var test = require('tap').test,
    lleval.js = require(__dirname + '/../../lib/index.js');

lleval.js(function (err) {
    test('unit', function (t) {
        t.equal(err, null, 'error object is null');
        t.end();
    });
});