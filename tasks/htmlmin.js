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
    var helpers = require('grunt-lib-contrib').init(grunt);
    var options = this.options();

    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(el) {
      var max = grunt.file.read(el.src);
      var min = minify(max, options);

      if (min.length) {
        grunt.file.write(el.dest, min);
        grunt.log.writeln('File ' + el.dest + ' created.');
        minMaxInfo(min, max);
      }
    });
  });
};
