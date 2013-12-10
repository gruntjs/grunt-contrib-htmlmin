# grunt-contrib-htmlmin [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-htmlmin.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-htmlmin)

> Minify HTML

Minifies HTML using [html-minifier](https://github.com/kangax/html-minifier).

**Bugs regarding the output should be reported on the [html-minifier issue tracker](https://github.com/kangax/html-minifier/issues/new), not here.**



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-htmlmin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-htmlmin');
```




## Htmlmin task
_Run this task with the `grunt htmlmin` command._


### Options

See the [html-minifier docs](http://perfectionkills.com/experimenting-with-html-minifier/#options) for more in-depth explanation of the options and caveats.

#### removeComments

Type: `Boolean`  
Default: `false`

Strip HTML comments.

#### removeCommentsFromCDATA

Type: `Boolean`  
Default: `false`

Remove HTML comments from inside `<script>` and `<style>`.

#### removeCDATASectionsFromCDATA

Type: `Boolean`  
Default: `false`

Remove CDATA sections from inside `<script>` and `<style>`.

#### collapseWhitespace

Type: `Boolean`  
Default: `false`

Collapse white space that contributes to text nodes in a document tree.

It doesn't affect significant white space; e.g. in contents of elements like SCRIPT, STYLE, PRE or TEXTAREA.

`<div> <p>    foo </p>    </div>` => `<div><p>foo</p></div>`

#### collapseBooleanAttributes

Type: `Boolean`  
Default: `false`

Collapse boolean attributes.

`<input disabled="disabled">` => `<input disabled>`

#### removeAttributeQuotes

Type: `Boolean`  
Default: `false`

Remove attribute quotes when it's safe to do so.

`<p id="foo">` => `<p id=foo>`

#### removeRedundantAttributes

Type: `Boolean`  
Default: `false`

Remove redundant attributes like `type="text/javascript"`.

#### useShortDoctype

Type: `Boolean`  
Default: `false`

Replace doctype with the short HTML5 version `<!DOCTYPE html>`.

#### removeEmptyAttributes

Type: `Boolean`  
Default: `false`

Remove empty (or blank) attributes.

#### removeOptionalTags

Type: `Boolean`  
Default: `false`

Some elements are allowed to have their tags omitted, like `</td>`.

#### removeEmptyElements

Type: `Boolean`  
Default: `false`

Remove empty elements.

*Experimental*

#### concat

Type: `Boolean`  
Default: `true`

Concatinates files rather than minifying them one-by-one.


### Usage Examples

#### Example config

```javascript
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

#### Minifying multiple files

```javascript
grunt.initConfig({
  htmlmin: {
    default: {
      options: {
        'concat': false
      },
      files: {
        'dist/': ['src/*.html'],
      }
    }
  }
});

grunt.registerTask('default', ['htmlmin']);
```

## Release History

 * 2013-12-11   v0.1.3   Made concat optional. Can minify multiple separate files.
 * 2013-04-06   v0.1.3   Fail target when minify encounters an error.
 * 2013-04-05   v0.1.2   Update html-minifier which fixes IE conditional comments and prefixed HTML elements `<ng-include>` `<ng:include>`.
 * 2013-02-18   v0.1.1   First official release for Grunt 0.4.0.
 * 2013-01-30   v0.1.1rc7   Updating grunt/gruntplugin dependencies to rc7. Changing in-development grunt/gruntplugin dependency versions from tilde version ranges to specific versions.
 * 2013-01-09   v0.1.1rc5   Updating to work with grunt v0.4.0rc5. Switching to this.filesSrc api.
 * 2012-11-01   v0.1.0   Initial release.

---

Task submitted by [Sindre Sorhus](http://github.com/sindresorhus)

*This file was generated on Sat Apr 06 2013 14:28:13.*
