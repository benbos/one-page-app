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

};
