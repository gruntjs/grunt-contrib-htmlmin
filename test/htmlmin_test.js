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
  empty: function(test) {
    test.expect(1);

    test.ok(!grunt.file.exists('tmp/idontexist.html'), 'Empty minified file should not exist');

    test.done();
  }
};
