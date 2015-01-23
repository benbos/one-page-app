'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        /**
         * Compass config
         */
        compass: {
            dist: {
                options: {
                    sassDir: 'src/public/sass',
                    cssDir: 'src/public/css',
                    fontsDir: 'fonts/',
                    http_fonts_path: '../fonts/'
                }
            }
        },

        /**
         * Watch config
         */
        watch: {
            options: {
                nospawn: true
            },
            styles: {
                files: 'src/public/sass/**/*.scss',
                tasks: ['compass']
            }
        }

    });


    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-filerev');
    // grunt.loadNpmTasks('grunt-contrib-requirejs');
    // grunt.loadNpmTasks('grunt-contrib-rename');
    // grunt.loadNpmTasks('grunt-strip');
    // grunt.loadNpmTasks('grunt-string-replace');
    // grunt.loadNpmTasks('grunt-notify');
};