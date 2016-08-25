module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: 'js/*.js',
                dest: 'js/build/production.js'
            }
          },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
          },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
          },
        responsive_images: {
          images: {
            options: {
                engine: 'im',
              },
            files: [{
              expand: true,
              src: ['**.{jpg,gif,png}'],
              cwd: 'images/',
              dest: 'images/build'
            }]
          }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['concat', 'uglify','responsive_images',
    'imagemin']);

};
