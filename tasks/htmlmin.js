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
  var path = require('path');

  grunt.registerMultiTask('htmlmin', 'Minify HTML', function () {
    var options = this.options({
      'concat': true
    });
    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function (f) {
      var min;
      var files = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      
      if(options.concat === true) {
        files = [files];
      } else {
        files = files.map(function(file) {
          return [file];
        });
      }
      
      if(options.concat === false && files.length > 1 && !grunt.file.isDir(f.dest)) {
        try {
          grunt.file.mkdir(f.dest);
        } catch(e) {
          grunt.log.error("To minify multiple files at once, the destination must be a directory");
        }
      }
      
            
      files.forEach(function(file) {

        // Correct destination if it's a folder
        var destination = f.dest;
        if(grunt.file.isDir(destination) && file.length == 1) {
          destination = path.normalize(destination + "/") + file[0].replace(/^.*\//, "");
        }
        
        var max = file.map(grunt.file.read)
        .join(grunt.util.normalizelf(grunt.util.linefeed));

        try {
          min = minify(max, options);
        } catch (err) {
          grunt.warn(file.src + '\n' + err);
        }

        if (min.length < 1) {
          grunt.log.warn('Destination not written because minified HTML was empty.');
        } else {
          grunt.file.write(destination, min);
          grunt.log.writeln('File ' + destination + ' created.');
          helper.minMaxInfo(min, file);
        }
      });
    });
  });
};
