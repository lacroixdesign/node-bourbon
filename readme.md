[![Bourbon Sass Mixin Library](http://bourbon.io/images/shared/bourbon-logo.png)](http://bourbon.io)

*This is a node-sass port of the [Bourbon](http://bourbon.io) library. If you
are looking for the original Ruby/Rails version, you can find it
[here](https://github.com/thoughtbot/bourbon).*

[![Build Status](https://travis-ci.org/lacroixdesign/node-bourbon.png?branch=master)](https://travis-ci.org/lacroixdesign/node-bourbon)

# Requirements
- [node](http://nodejs.org)
- [node-sass](https://github.com/andrew/node-sass)

# Installation

To install as a development dependency, run:

```bash
npm install --save-dev node-bourbon
```

If you need it in production, replace `--save-dev` with `--save`.

# Usage

The `includePaths` property returns an array of paths for use in
node-sass' `includePaths` option.

```javascript
var bourbon = require('node-bourbon').includePaths;
```

You can then pass this array to your config options:

```javascript
var sass    = require('node-sass')
  , bourbon = require('node-bourbon').includePaths;

sass.render({
  file: './application.scss',
  success: function(css){
    console.log(css);
  },
  error: function(error) {
    console.log(error);
  },
  // If you have additional paths to include, do something like:
  // includePaths: bourbon.concat('other/path', 'another/path'),
  includePaths: bourbon,
  outputStyle: 'compressed'
});
```

Import Bourbon at the beginning of your main scss file:

```scss
@import "bourbon";
@import "other/scss/partial";
```

# Grunt Usage

### Using the grunt-sass task

The [grunt-sass](https://github.com/sindresorhus/grunt-sass) task uses
[node-sass](https://github.com/andrew/node-sass)
([libsass](https://github.com/hcatlin/libsass)) underneath, and is the recommended
way to use Grunt with node-bourbon.

Example config:

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

### Using the grunt-contrib-sass task

If you are using the Ruby version of Sass with node-bourbon, then you will need to use
the [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) task instead.

*Note that node-bourbon isn't tested against the Ruby version, however some dirty*
*testing showed that it should work with v3.2 and 3.3.0.rc.2 of the gem. YMMV.*

Example config:

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

# Testing

```
make test
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

node-bourbon is Copyright © 2013-2014 Michael LaCroix. It is free software, and may be redistributed under the terms specified in the LICENSE file.
