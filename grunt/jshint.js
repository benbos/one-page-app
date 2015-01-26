/* global module:false */
"use strict";

/**
 * JSHint config
 * @type {Object}
 */
module.exports = {
    all: ["Gruntfile.js", "src/public/js/**/*.js", "grunt/**/*.js"],
    options: {
        jshintrc: ".jshintrc",
        globals: {
            "console": false
        }
    }
};