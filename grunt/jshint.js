/* global module:false */
"use strict";

module.exports = {
    all: ["Gruntfile.js", "src/public/js/**/*.js", "grunt/**/*.js"],
    options: {
        jshintrc: ".jshintrc",
        "-W097": true, // Ingore error: Use the function form of "use strict"
        // eqeqeq: true,
        // indent: 4,
        // browser: true,
        // jquery: true,
        globals: {
            "console": false
        }
    }
};