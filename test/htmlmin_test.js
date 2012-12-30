'use strict';

var grunt = require('grunt');

exports.htmlmin = {
  dest: function(test) {
    test.expect(8);

    test.ok(grunt.file.exists('tmp/test.html'));
    test.ok(grunt.file.exists('tmp/fixtures/test.html'));
    test.ok(grunt.file.exists('tmp/fixtures/test2.html'));
    test.ok(grunt.file.exists('tmp/test/test2.html'));
    test.ok(grunt.file.exists('tmp/test/fixtures/test.html'));
    test.ok(grunt.file.exists('tmp/test/fixtures/test2.html'));
    test.ok(grunt.file.exists('tmp/test/expected/test.html'));
    test.ok(grunt.file.exists('tmp/test/expected/test2.html'));

    test.done();
  },
  compile: function(test) {
    test.expect(4);

    var expected = grunt.file.read('test/expected/test.html');
    var actual = grunt.file.read('tmp/test.html');
    test.strictEqual(actual, expected, 'should minify HTML');
    actual = grunt.file.read('tmp/fixtures/test.html');
    test.strictEqual(actual, expected, 'should minify HTML');

    expected = grunt.file.read('test/expected/test2.html');
    actual = grunt.file.read('tmp/fixtures/test2.html');
    test.strictEqual(actual, expected, 'should minify HTML');
    actual = grunt.file.read('tmp/test/test2.html');
    test.strictEqual(actual, expected, 'should minify HTML');

    test.done();
  }
};
