/*
 * grunt-contrib-htmlmin
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';
var chalk = require('chalk');
var prettyBytes = require('pretty-bytes');
var minify = require('html-minifier').minify;

module.exports = function (grunt) {
  grunt.registerMultiTask('htmlmin', 'Minify HTML', function () {
    var options = this.options();

    this.files.forEach(function (file) {
      var min;
      var src = file.src[0];

      if (!grunt.file.exists(src || ' ')) {
        return grunt.log.warn('Source file "' + chalk.cyan(src) + '" not found.');
      }

      var max = grunt.file.read(src);

      if (max.length === 0) {
        return grunt.log.warn('Destination ' + chalk.cyan(src) + ' not written because source file was empty.');
      }

      try {
        min = minify(max, options);
      } catch (err) {
        return grunt.warn(file.src + '\n' + err);
      }

      if (min.length === 0) {
        return grunt.log.warn('Destination ' + chalk.cyan(src) + ' not written because there was nothing to minify.');
      }

      grunt.file.write(file.dest, min);
      grunt.log.writeln('Minified ' + chalk.cyan(file.dest) + ' ' + prettyBytes(max.length) + ' → ' + prettyBytes(min.length));
    });
  });
};
