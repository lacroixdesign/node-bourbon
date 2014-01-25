var expect  = require('chai').expect
  , sass    = require('node-sass')
  , bourbon = require('../').includePaths
  , fs      = require('fs');

describe('node-bourbon', function() {

  it('should compile to css when importing Bourbon', function() {
    var generatedCss = sass.renderSync({
      file: __dirname + '/fixtures/compile.scss',
      includePaths: bourbon,
      outputStyle: 'expanded'
    });
    var expectedCssFile = __dirname + '/expectations/compile.css';
    var expectedCss     = fs.readFileSync(expectedCssFile, {encoding: 'utf8'});
    expect(generatedCss).to.eq(expectedCss);
  });

  it('should not throw errors for Bourbon features', function(done) {
    sass.render({
      file: __dirname + '/fixtures/features.scss',
      includePaths: bourbon,
      error: function(err) {
        throw new Error(err);
      },
      success: function(css) {
        done();
      }
    });
  });

});
