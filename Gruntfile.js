/*
 * grunt-contrib-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },
    clean: {
      test: ['tmp']
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      compile: {
        files: {
          'tmp/test.html': ['test/fixtures/test.html']
        }
      },
      empty: {
        files: {
          'tmp/idontexist.html': ['test/fixtures/idontexist.html'],
          'tmp/iamempty.html': ['test/fixtures/iamempty.html']
        }
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  grunt.registerTask('test', ['jshint', 'clean', 'htmlmin', 'nodeunit']);
  grunt.registerTask('default', ['test', 'build-contrib']);
};
