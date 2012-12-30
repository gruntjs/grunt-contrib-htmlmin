/*
 * grunt-contrib-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Sindre Sorhus, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },

    // Configuration to be run (and then tested).
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true,
        cwd: "test/fixtures/"
      },
      'tmp/test.html': 'test/fixtures/test.html',
      'tmp/fixtures/': 'test/fixtures/*.html',
      'tmp/test/': 'test/fixtures/test2.html',
      'no-cwd': {
        options: {
          cwd: ""
        },
        src: 'test/**/*.html',
        dest: "tmp/"
      }
    },

    // Unit tests.
    nodeunit: {
      tasks: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['htmlmin', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test', 'build-contrib']);
};
