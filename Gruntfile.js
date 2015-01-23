'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        /**
         * Clean config
         */
        clean: {
            dist: ['dist/'],
            temp: ['.tmp','.sass-cache']
        },

        /**
         * Usemin
         */
        useminPrepare: {
            html: ['src/public/*.html', 'src/public/js/templates/**/*.hbs'],
            js: ['src/public/js/**/*.js'],
            options: {
                dest: '.tmp'
            }
        },

        /**
         * Copy config
         */
        copy: {
            dist: {
                files: [{
                    cwd: 'src/',
                    src: [
                        'public/index.html',
                        'public/.htaccess',
                        'public/favicon.ico',
                        'public/img/**/*.{jpg,gif,png,json}',
                        'public/fonts/**/*'
                     ],
                    dest: 'dist/',
                    expand: true
                }]
            }
        },

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
         * Requirejs config
         */
        requirejs: {
            compile: {
                options: {
                    //  name: "./src/public/components/almond/almond.js",
                    // name: "/src/public/js/app.js",
                    name: 'app',
                    baseUrl: "src/public/js",
                    mainConfigFile: "src/public/js/app.js",
                    out: ".tmp/js/app.min.js"
                },
                paths: {
                    jquery: 'components/jquery/jquery'
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

    grunt.registerTask('build',[
        'clean:dist',
        'compass',
        'useminPrepare',
        // 'copy:styles',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'requirejs',
        'filerev',
        'usemin',
        // 'copy:scripts',
        // 'copy:bootstrap',
        // 'strip',
        'clean:temp'
    ]);


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // grunt.loadNpmTasks('grunt-contrib-rename');
    // grunt.loadNpmTasks('grunt-strip');
    // grunt.loadNpmTasks('grunt-string-replace');
    // grunt.loadNpmTasks('grunt-notify');
};