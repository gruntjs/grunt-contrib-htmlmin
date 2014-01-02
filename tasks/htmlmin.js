/*
 * grunt-contrib-htmlmin
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var minify = require('html-minifier').minify;
  var helper = require('grunt-lib-contrib').init(grunt);

  grunt.registerMultiTask('htmlmin', 'Minify HTML', function () {
    var options = this.options();
    var dest;
    grunt.verbose.writeflags(options, 'Options');
    this.files.forEach(function (file) {
      if (detectDestType(file.dest) === 'directory') {
        file.src.forEach(function (filePath) {
          var max = readSingleHtml(filePath);
          dest = file.dest + getFileName(filePath);
          writeMinHtml(max, dest, options);
        });
      } else {
        var max = readMultHtml(file);
        dest = file.dest;
        writeMinHtml(max, dest, options);
      }
    });
  });

  var detectDestType = function (dest) {
    if (grunt.util._.endsWith(dest, '/')) {
      return 'directory';
    } else {
      return 'file';
    }
  };

  var getFileName = function (filePath) {
    return filePath.substr(filePath.lastIndexOf('/'));
  };

  var readMultHtml = function (file) {
    return file.src.filter(function (filepath) {
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
  };

  var readSingleHtml = function (filepath) {
    if (!grunt.file.exists(filepath)) {
      grunt.log.warn('Source file "' + filepath + '" not found.');
      return "";
    }
    return grunt.file.read(filepath);
  };

  var writeMinHtml = function (max, dest, options) {
    var min;
    try {
      min = minify(max, options);
    } catch (err) {
      grunt.warn(dest + '\n' + err);
    }

    if (min.length < 1) {
      grunt.log.warn('Destination not written because minified HTML was empty.');
    } else {
      grunt.file.write(dest, min);
      grunt.log.writeln('File ' + dest + ' created.');
      helper.minMaxInfo(min, max);
    }
  };
};
