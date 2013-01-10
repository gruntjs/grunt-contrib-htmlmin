/*
 * grunt-contrib-htmlmin
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

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

  grunt.registerMultiTask('htmlmin', 'Minify HTML', function() {
    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(f) {
      var max = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      })
      .map(grunt.file.read)
      .join(grunt.util.normalizelf(grunt.util.linefeed));

      var min = minify(max, options);
      if (min.length < 1) {
        grunt.log.warn('Destination not written because minified HTML was empty.');
      } else {
        grunt.file.write(f.dest, min);
        grunt.log.writeln('File ' + f.dest + ' created.');
        minMaxInfo(min, max);
      }
    });

  });
};
