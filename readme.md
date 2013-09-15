[![Bourbon Sass Mixin Library](http://bourbon.io/images/shared/bourbon-logo.png)](http://bourbon.io)

*This is a node-sass port of the [Bourbon](http://bourbon.io) library. If you
are looking for the original Ruby/Rails version, you can find it
[here](https://github.com/thoughtbot/bourbon).*

# A simple and lightweight mixin library for Sass
Bourbon is a comprehensive library of sass mixins that are designed to be simple
and easy to use. No configuration required. The mixins aim to be as vanilla as
possible, meaning they should be as close to the original CSS syntax as possible.

The mixins contain vendor specific prefixes for all CSS3 properties for support
amongst modern browsers. The prefixes also ensure graceful degradation for older
browsers that support only CSS3 prefixed properties. Bourbon uses SCSS syntax.

##[Bourbon Documentation & Demo](http://bourbon.io)

## Requirements
- [node](http://nodejs.org)
- [node-sass](https://github.com/andrew/node-sass)

# Installation

To install as a development dependency, run:

```bash
npm install --save-dev node-bourbon
```

If you need it for production, replace `--save-dev` with `--save`.

# Usage

The `includePaths` property returns an array of paths for use in
node-sass' `includePaths` option.

```javascript
var bourbon = require('node-bourbon').includePaths;
```

You can then use this array in your options:

```javascript
var sass    = require('node-sass')
  , bourbon = require('node-bourbon').includePaths;

var paths = ['other/path', 'another/path'].concat(bourbon);

sass.render({
  file: './application.scss',
  success: function(css){
    console.log(css);
  },
  error: function(error) {
    console.log(error);
  },
  includePaths: paths,
  outputStyle: 'compressed'
});
```

# Grunt Usage

Using the [grunt-sass](https://github.com/sindresorhus/grunt-sass) task:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('bourbon').includePaths,
        outputStyle: 'compressed'
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

Import Bourbon at the beginning of your main scss file.
All additional stylesheets must be imported below Bourbon:

```scss
@import "bourbon";
@import "other/scss/partial";
```

-------
# [Bourbon Changelog](https://github.com/thoughtbot/bourbon/wiki)

# [Browser support](https://github.com/thoughtbot/bourbon/wiki/Browser-Support)
-------

Credits
-------

This node-sass port is maintained by Michael LaCroix, however all credits for
the Bourbon library go to [thoughtbot, inc](http://thoughtbot.com/community):

> ![thoughtbot](http://thoughtbot.com/images/tm/logo.png)
>
> Bourbon is maintained and funded by [thoughtbot, inc](http://thoughtbot.com/community)
>
> The names and logos for thoughtbot are trademarks of thoughtbot, inc.
>
> Got questions? Need help? Tweet at [@phillapier](http://twitter.com/phillapier).

License
-------

node-bourbon is Copyright © 2013 Michael LaCroix. It is free software, and may be redistributed under the terms specified in the LICENSE file.
