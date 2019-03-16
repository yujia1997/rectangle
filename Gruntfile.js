 module.exports = function (grunt) {
          htmlhintrc: '.htmlhintrc'
                  
},
        src: '*.html'
            },
            mocha: {
              test: {
                  src: ['test/index.html'],
                              
              },
              options: {
                        run: true,
                        reporter: 'Spec'
                                        
              }
                  
            }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('unitTest', ['mocha']);
  };
