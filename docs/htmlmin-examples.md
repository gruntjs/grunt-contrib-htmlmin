## Example config

```javascript
grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html',     // 'destination': 'source'
        'dist/contact.html': 'src/contact.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'dist/index.html': 'src/index.html',
        'dist/contact.html': 'src/contact.html'
      }
    },
    multiple: {                                  // Target
      files: [{                                  // Dictionary of files
        expand: true,
        cwd: 'app/',                             // Project root
        src: '**/*.html',                        // Source
        dest: 'dist/'                            // Destination
      }]
  }
});

grunt.registerTask('default', ['htmlmin']);
```
