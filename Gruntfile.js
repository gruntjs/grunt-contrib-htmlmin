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
          'tmp/test.html': 'test/fixtures/test.html'
        }
      },
      glob: {
        src: ['test/fixtures/**/*.html'],
        dest: 'tmp/'
      },
      empty: {
        files: {
          'tmp/idontexist.html': 'test/fixtures/idontexist.html'
        }
      }
    },
    nodeunit: {
      tests: ['test/test.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  grunt.registerTask('test', ['jshint', 'clean', 'htmlmin', 'nodeunit']);
  grunt.registerTask('default', ['test', 'contrib-core', 'contrib-ci:skipIfExists']);
};
