/* global module:false */
"use strict";

/**
 * Watch config
 * @type {Object}
 */
module.exports = {
    options: {
        nospawn: true
    },
    styles: {
        files: "src/public/sass/**/*.scss",
        tasks: ["compass"]
    }
};