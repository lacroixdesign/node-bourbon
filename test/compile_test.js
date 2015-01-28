var expect  = require('chai').expect
  , sass    = require('node-sass')
  , bourbon = require('../')
  , fs      = require('fs');

describe('compiling bourbon', function() {

  it('should compile to css when importing Bourbon', function() {
    var output = sass.renderSync({
      file: __dirname + '/fixtures/compile.scss',
      includePaths: bourbon.includePaths,
      outputStyle: 'expanded'
    });
    var expectedCssFile = __dirname + '/expectations/compile.css';
    var expectedCss     = fs.readFileSync(expectedCssFile, {encoding: 'utf8'});
    expect(output.css).to.eq(expectedCss);
  });

  it('should not throw errors for Bourbon features', function(done) {
    sass.render({
      file: __dirname + '/fixtures/features.scss',
      includePaths: bourbon.includePaths,
      error: function(err) {
        var msg = err.message +
                  '\nFile:\n\t' + err.file +
                  ':' + err.line +
                  ':' + err.column;
        throw new Error(msg);
      },
      success: function(css) {
        done();
      }
    });
  });

});
