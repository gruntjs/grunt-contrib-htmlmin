var minify = require('html-minifier').minify;

module.exports = function (grunt) {
  grunt.registerMultiTask('htmlmin', 'Minify HTML', function () {
    var options = this.options();

    this.files.forEach(function(file) {

	var contents = file.src.filter(function(filepath) {
            // Remove nonexistent files (it's up to you to filter or warn here).                                                                                                         
            if (!grunt.file.exists(filepath)) {
		grunt.log.warn('Source file "' + filepath + '" not found.');
		return false;
            } else {
		return true;
            }
	    }).map(function(filepath) {
            // Read and return the file's source                                                                                                                                         
            return grunt.file.read(filepath);
  }).join('\n');
  // Write joined contents to destination filepath.                                                                                                                                      
  //grunt.log.writeln(contents);                                                                                                                                                         
  //grunt.log.write(contents);                                                                                                                                                           
  var min = minify(contents, options);
  //grunt.log.write(min);                                                                                                                                                                
  grunt.file.write(file.dest, min);
  // Print a success message.                                                                                                                                                            
  grunt.log.writeln('Minified ' + chalk.cyan(file.dest) + prettyBytes(file.dest.length) + ' → ' + prettyBytes(contents.length));

});

  });
};
