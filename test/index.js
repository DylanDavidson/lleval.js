var chai = require('chai');
var expect = chai.expect;
var LLEval = require('../lib/index.js');

describe('lleval', function() {
  describe('#eval', function() {
    var language = "js";
    var code = "console.log('test');";

    context('when null is given as the code', function() {
      var code = null;

      it('should pass a NoSourceError to the callback', function() {
        LLEval.eval("js", code, function(err, res) {
          expect(err).to.be.an.instanceof(LLEval.NoSourceError);
        });
      });
    });

    context('when a blank string is given as the code', function() {
      var code = "    ";

      it('should pass a NoSourceError to the callback', function() {
        LLEval.eval("js", code, function(err, res) {
          expect(err).to.be.an.instanceof(LLEval.NoSourceError);
        });
      });
    });

    context('when null is given as the language', function() {
      var language = null;

      it('should pass a NoLanguageError to the callback', function () {
        LLEval.eval(language, code, function(err, res) {
          expect(err).to.be.an.instanceof(LLEval.NoLanguageError);
        });
      });
    });

    context('when a blank string is given as the language', function() {
      var language = "   ";

      it('should pass a NoLanguageError to the callback', function () {
        LLEval.eval(language, code, function(err, res) {
          expect(err).to.be.an.instanceof(LLEval.NoLanguageError);
        });
      });
    });
  });
});
