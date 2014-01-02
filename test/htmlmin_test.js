'use strict';

var grunt = require('grunt');

exports.htmlmin = {
  compile: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test.html');
    var expected = grunt.file.read('test/expected/test.html');
    test.equal(actual, expected, 'should minify HTML');

    test.done();
  },
  multiple: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiple.html');
    var expected = grunt.file.read('test/expected/multiple.html');
    test.equal(actual, expected, 'should minify multiple HTML files');

    test.done();
  },

  dir: function(test) {
    test.expect(2);

    var actual1 = grunt.file.read('tmp/html1.html');
    var expected1 = grunt.file.read('test/expected/html1.html');

    var actual2 = grunt.file.read('tmp/html2.html');
    var expected2 = grunt.file.read('test/expected/html2.html');


    test.equal(actual1, expected1, 'should minify dir HTML files');
    test.equal(actual2, expected2, 'should minify dir HTML files');
    test.done();
  },

  empty: function(test) {
    test.expect(1);

    test.ok(!grunt.file.exists('tmp/idontexist.html'), 'Empty minified file should not exist');

    test.done();
  }
};
