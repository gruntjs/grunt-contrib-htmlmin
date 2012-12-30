/*
 * grunt-contrib-htmlmin
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
  var minify = require('html-minifier').minify;

  var minMaxGzip = function(src) {
    return src ? require('gzip-js').zip(src, {}) : '';
  };

  var minMaxInfo = function(min, max) {
    var gzipSize = String(minMaxGzip(min).length);
    grunt.log.writeln('Uncompressed size: ' + String(max.length).green + ' bytes.');
    grunt.log.writeln('Compressed size: ' + gzipSize.green + ' bytes gzipped (' + String(min.length).green + ' bytes minified).');
  };

  var min = function(options, src, dest) {
    var max = grunt.file.read(src);
    var min = minify(max, options);

    if (min.length) {
      // If the destination is or resembles a directory we'll need to
      // join the `dest` and `src` paths, but only after stripping
      // `cwd` (if specified) from `src`.
      if (grunt.file.isDir(dest) || (!grunt.file.exists(dest) && dest[dest.length - 1] === path.sep)) {
        if (options.cwd.length > 0 && src.indexOf(options.cwd) === 0) {
          src = src.substring(options.cwd.length);
        }
        dest = path.join(dest, src);
      }
      grunt.file.write(dest, min);
      grunt.log.writeln('Wrote minified HTLM to ' + dest + '.');
      minMaxInfo(min, max);
    }
  };

  grunt.registerMultiTask('htmlmin', 'Minify HTML', function() {
    var options = this.options({
      cwd: ''
    });
    var dest = this.file.dest;

    if (options.cwd.length > 0 && options.cwd[options.cwd.length - 1] !== path.sep) {
      options.cwd += path.sep;
    }

    grunt.verbose.writeflags(options, 'Options');

    this.file.src.forEach(function(file) {
        min(options, file, dest);
    });
  });
};
