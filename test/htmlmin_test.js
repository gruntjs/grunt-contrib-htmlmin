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
  concat: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/concat.html');
    var expected = grunt.file.read('test/expected/test.html');
    test.equal(actual, expected, 'should concat and minify multiple HTML files');

    test.done();
  },
  empty: function(test) {
    test.expect(1);

    test.ok(!grunt.file.exists('tmp/idontexist.html'), 'Empty minified file should not exist');

    test.done();
  },
  multiple: function(test) {
    test.expect(2);
    
    var actual1 = grunt.file.read('tmp/multiple1.html');
    var actual2 = grunt.file.read('tmp/multiple2.html');
    var expected1 = grunt.file.read('test/expected/multiple1.html');
    var expected2 = grunt.file.read('test/expected/multiple2.html');
    
    test.equal(actual1, expected1, 'should minify multiple HTML files (1/2)');
    test.equal(actual2, expected2, 'should minify multiple HTML files (2/2)');
    
    test.done();
  }
};
