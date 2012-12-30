# grunt-contrib-htmlmin [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-htmlmin.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-htmlmin)

> Minify HTML

_Note that this plugin has not yet been released, and only works with the latest bleeding-edge, in-development version of grunt. See the [When will I be able to use in-development feature 'X'?](https://github.com/gruntjs/grunt/blob/devel/docs/faq.md#when-will-i-be-able-to-use-in-development-feature-x) FAQ entry for more information._

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-contrib-htmlmin --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-contrib-htmlmin');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html


## The htmlmin task

Minifies HTML using [html-minifier](http://perfectionkills.com/experimenting-with-html-minifier). Bugs regarding the output should be reported [here](https://github.com/kangax/html-minifier/issues/new).

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
    },
    all: {                                       // Minify multiple files using file globbing
      files: {
        'dist/': 'src/**/*.html'
      }
    }
  }
});

grunt.registerTask('default', ['htmlmin']);
```


## Release History

 * 2012-11-01 - v0.1.0 - Initial release.

--
Task submitted by <a href="http://github.com/sindresorhus">Sindre Sorhus</a>.

*Generated on Thu Nov 01 2012 23:21:06.*
