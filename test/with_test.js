const chai = require('chai');
const assert = chai.assert;
const sass = require('node-sass');
const bourbon = require('../');

function partialsDir(path) {
  return __dirname + '/fixtures/concat/' + path;
}

function errorHandler(err) {
  var msg = err.message +
            '\nFile:\n\t' + err.file +
            ':' + err.line +
            ':' + err.column;
  throw new Error(msg);
}

describe('#with function', function() {

  it('should return an array of paths', function() {
    assert.isArray(bourbon.with());
    assert.isString(bourbon.with()[0], 'first #with function path');
  });

  it('should concat string paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: bourbon.with(partialsDir('dir1'), partialsDir('dir2'), partialsDir('dir3')),
      error: errorHandler
    }, function(err, res) {
      if (err) return done(err);
      done();
    });
  });

  it('should concat array paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: bourbon.with([partialsDir('dir1')], [partialsDir('dir2')], [partialsDir('dir3')]),
      error: errorHandler
    }, function(err, res) {
      if (err) return done(err);
      done();
    });
  });

  it('should concat mixed args paths using #with', function(done) {
    sass.render({
      file: __dirname + '/fixtures/concat.scss',
      includePaths: bourbon.with([partialsDir('dir1'), partialsDir('dir2')], partialsDir('dir3')),
      error: errorHandler
    }, function(err, res) {
      if (err) return done(err);
      done();
    });
  });

});
