 module.exports = function (grunt) {
          htmlhintrc: '.htmlhintrc'
                  
},
          src: 'index.html',
            },
            mocha: {
              test: {
                  src: ['test/index.html'],
                              
              },
              options: {
                        run: true,
                        reporter: 'Spec'
                                        
              }

                  
            },
            htmlmin: {
              options: {
                        collapseWhitespace: true,
                                preserveLineBreaks: false
                                        
              },
              files: {
                        src: './index.html',
                                dest: 'dist/index.html'
                                        
              }
                  
            },
            cssmin: {
                    'dist/rectangle.css': 'rectangle.css'
                          
            },
            uglify: {
              release:{
                files: {
                            'dist/rectangle.js': 'rectangle.js',
                                      'dist/calc.js': 'calc.js'
                                                
                }
                             
              }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('unitTest', ['mocha']);
  grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };
