'use strict';
var chalk = require('chalk');
var prettyBytes = require('pretty-bytes');
var minify = require('html-minifier').minify;
var reGlob = /.*\*.*/;
var path = require('path');

module.exports = function (grunt) {

  var isUnexpandedGlob = function (file) {
    var filename = file.orig.src[0],
        expand = file.orig.expand;
    return reGlob.test(filename) && !expand;
  };

  var createFilename = function (destination, filepath) {
    return path.resolve(destination, path.basename(filepath));
  };

  var minifyFile = function (filepath, outputFilename, options) {
    var min;
    var max = grunt.file.read(filepath);

    grunt.log.debug("Minifying file : " + outputFilename);

    try {
      min = minify(max, options);
      grunt.file.write(outputFilename, min);
      grunt.verbose.writeln('Minified ' + chalk.cyan(outputFilename) + ' ' + prettyBytes(max.length) + ' → ' + prettyBytes(min.length));

    } catch (err) {

      grunt.warn(outputFilename + '\n' + err);
      return;
    }

  };

  grunt.registerMultiTask('htmlmin', 'Minify HTML', function () {
    var options = this.options();
    var count = 0;
    var failCount = 0;

    this.files.forEach(function (file) {
      var currentSetOfInputFiles = file.src,
          destination = file.dest,
          outputFilename;

      if (!currentSetOfInputFiles) {
        return;
      }

      currentSetOfInputFiles.forEach(function (filepath) {
        outputFilename = isUnexpandedGlob(file) ?
            createFilename(destination, filepath)
            : destination;
        try {
          minifyFile(filepath, outputFilename, options);
        } catch (err){
          failCount++;
        }

        count++;

      });


    });

    grunt.log.writeln('Minified ' + chalk.cyan(count) + ' files' + (failCount > 0 ? ' (' + chalk.red(failCount) + ' failed)' : ''));

  });
};
