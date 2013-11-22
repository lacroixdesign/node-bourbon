var expect  = require('chai').expect
  , sass    = require('node-sass')
  , bourbon = require('../').includePaths
  , fs      = require('fs');

describe('node-bourbon', function() {
  it('should compile to css when importing Bourbon', function() {
    var generatedCss = sass.renderSync({
      file: __dirname + '/fixtures/source.scss',
      includePaths: bourbon,
      outputStyle: 'expanded'
    });
    var expectedCssFile = __dirname + '/expectations/compiled.css';
    var expectedCss     = fs.readFileSync(expectedCssFile, {encoding: 'utf8'});
    expect(generatedCss).to.eq(expectedCss);
  });
});
