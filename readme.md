[![Bourbon Sass Mixin Library](http://bourbon.io/images/shared/bourbon-logo.png)](http://bourbon.io)

*This is a node-sass port of the [Bourbon](http://bourbon.io) library. If you
are looking for the original Ruby/Rails version, you can find it
[here](https://github.com/thoughtbot/bourbon).*

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

Import Bourbon at the beginning of your main scss file.
All additional stylesheets must be imported below Bourbon:

```scss
@import "bourbon";
@import "other/scss/partial";
```

# Grunt Usage

Using the [grunt-sass](https://github.com/sindresorhus/grunt-sass) task:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('node-bourbon').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

Using the [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) task:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        loadPath: require('node-bourbon').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
});
```

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
