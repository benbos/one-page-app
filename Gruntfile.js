'use strict';

module.exports = function(grunt) {

    require('load-grunt-config')(grunt);

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