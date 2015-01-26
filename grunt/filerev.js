/* global module:false */
"use strict";

/**
 * Filerev config
 * @type {Object}
 */
module.exports = {
    css: {
        // src: ".tmp/css/*.css",
        src: "dist/public/css/*.css",
        // dest: "dist/public/css"
    },
    js: {
        src: "dist/public/js/**/*.js"
        // src: ".tmp/js/**/*.js",
        // dest: "dist/public/js"
    },
    images: {
        src: "dist/public/img/*.{jpg,png,gif}"
    }
};