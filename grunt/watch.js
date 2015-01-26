/* global module:false */
"use strict";

/**
  * Watch config
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