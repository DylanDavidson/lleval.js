var chai = require('chai');
var expect = chai.expect;
var LLEval = require('../lib/index.js');

describe('lleval', function() {
  describe('#eval', function() {
    var language = "js";
    var code = "console.log('test');";

    context('when no code is given', function() {
      var code = null;

      it('should pass a NoSourceError to the callback', function() {
        LLEval.eval("js", code, function(err, res) {
          expect(err).to.be.an.instanceof(LLEval.NoSourceError);
        });
      });
    });

    context('when no language is given', function() {
      var language = null;

      it('should pass a NoLanguageError to the callback', function () {
        LLEval.eval(language, code, function(err, res) {
          expect(err).to.be.an.instanceof(LLEval.NoLanguageError);
        });
      });
    });

    context('when an invalid language is given', function() {
      it('should pass a InvalidLanguageError to the callback', function () {
      });
    });
  });
});
