# grunt-contrib-htmlmin v3.1.0 [![Build Status](https://github.com/gruntjs/grunt-contrib-htmlmin/workflows/Tests/badge.svg)](https://github.com/gruntjs/grunt-contrib-htmlmin/actions?workflow=Tests)

> Minify HTML



## Getting Started

If you haven't used [Grunt](https://gruntjs.com/) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-htmlmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-htmlmin');
```




## Htmlmin task
_Run this task with the `grunt htmlmin` command._

*Issues with the output should be reported on the `htmlmin` [issue tracker](https://github.com/kangax/html-minifier/issues/new).*

### Options

See the `html-minifier` [options](https://github.com/kangax/html-minifier#options-quick-reference).

### Examples

#### Simple Example

```js
grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'dist/index.html': 'src/index.html',
        'dist/contact.html': 'src/contact.html'
      }
    }
  }
});

grunt.registerTask('default', ['htmlmin']);
```

#### Example with Nested Files

```js
grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
        files: [{
          expand: true,
          cwd: 'app',
          src: ['src/**/*.html', '*.html'],
          dest: 'dist'
      }]
    }
  }
});

grunt.registerTask('default', ['htmlmin']);
```


## Release History

 * 2019-04-01   v3.1.0   Updated html-minifier to v4.0.0. Updated all other dependencies.
 * 2018-08-26   v3.0.0   Updated all dependencies. Requires Node.js >= 6.
 * 2017-05-16   v2.4.0   Updated html-minifier to v3.5.0.
 * 2017-03-08   v2.3.0   Updated html-minifier to v3.4.0.
 * 2017-01-30   v2.2.0   Updated html-minifier to v3.3.0.
 * 2017-01-14   v2.1.0   Updated html-minifier to v3.2.3 and pretty-bytes to 4.0.2.
 * 2016-07-19   v2.0.0   Updated html-minifier to v3.0.1. Note that Node.js < 4 isn't supported anymore.
 * 2016-07-13   v1.5.0   Updated html-minifier to v2.1.7.
 * 2016-04-19   v1.4.0   Updated html-minifier to v2.0.0.
 * 2016-04-10   v1.3.0   Updated html-minifier to v1.5.0.
 * 2016-03-31   v1.2.0   Updated html-minifier to v1.4.0.
 * 2016-03-18   v1.1.0   Updated html-minifier to v1.3.0.
 * 2016-03-04   v1.0.0   Updated html-minifier to v1.2.0. Point main to task. Drop peerDeps.
 * 2015-10-28   v0.6.0   Updated html-minifier to v1.0.0.
 * 2015-09-25   v0.5.0   Updated html-minifier to v0.8.0.
 * 2015-02-06   v0.4.0   Updated html-minifier to v0.7.0.
 * 2014-05-05   v0.3.0   Drop Node.js 0.8 support. Updated html-minifier to v0.6.0.
 * 2014-02-09   v0.2.0   Rewrite task. Drop concat support.
 * 2013-04-06   v0.1.3   Fail target when minify encounters an error.
 * 2013-04-05   v0.1.2   Update html-minifier which fixes IE conditional comments and prefixed HTML elements `<ng-include>`, `<ng:include>`.
 * 2013-02-18   v0.1.1   First official release for Grunt 0.4.0.
 * 2013-01-30   v0.1.1rc7   Updating grunt/gruntplugin dependencies to rc7. Changing in-development grunt/gruntplugin dependency versions from tilde version ranges to specific versions.
 * 2013-01-09   v0.1.1rc5   Updating to work with grunt v0.4.0rc5. Switching to `this.filesSrc` API.
 * 2012-11-01   v0.1.0   Initial release.

---

Task submitted by [Sindre Sorhus](https://github.com/sindresorhus)

*This file was generated on Thu May 26 2022 22:27:21.*
