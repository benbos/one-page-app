/* global module:false,require:false */
"use strict";

module.exports = function(grunt) {

    require("time-grunt")(grunt);
    require("load-grunt-config")(grunt);

    grunt.registerTask("build", [
        "clean:dist",
        "jshint",
        "jscs",
        "compass",
        "copy:dist",
        "useminPrepare",
        "concat:generated",
        "cssmin:generated",
        "uglify:generated",
        "requirejs",
        "filerev",
        "usemin",
        "strip",
        "clean:temp"
    ]);

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-filerev");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");
    // grunt.loadNpmTasks("grunt-contrib-rename");
    grunt.loadNpmTasks("grunt-strip");
    // grunt.loadNpmTasks("grunt-string-replace");
    // grunt.loadNpmTasks("grunt-notify");
};
