'use strict';
var grunt = require('grunt');

exports.htmlmin = {
  compile: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test.html');
    var expected = grunt.file.read('test/expected/test.html');
    test.equal(actual, expected, 'should minify HTML');

    test.done();
  },
  glob: function (test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/glob.html');
    var expected = grunt.file.read('test/expected/glob.html');
    test.equal(actual, expected, 'should minify HTML');

    // using a globbing pattern, we should be able to compile both fixtures
    var actual2 = grunt.file.read('tmp/test.html');
    var expected2 = grunt.file.read('test/expected/test.html');
    test.equal(actual2, expected2, 'should minify HTML');

    test.done();
  },
  empty: function (test) {
    test.expect(1);

    test.ok(!grunt.file.exists('tmp/idontexist.html'), 'Empty minified file should not exist');

    test.done();
  }
};
