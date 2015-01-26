/* global module:false */
"use strict";

/**
 * Copy config
 * @type {Object}
 */
module.exports = {
    dist: {
        files: [{
            cwd: "src/",
            src: [
                "public/index.html",
                "public/.htaccess",
                "public/favicon.ico",
                "public/img/**/*.{jpg,gif,png,json}",
                "public/fonts/**/*"
             ],
            dest: "dist/",
            expand: true
        }]
    },
    styles: {
        expand: true,
        dot: true,
        cwd: "src/public/css",
        dest: ".tmp/styles/",
        src: "{,*/}*.css"
    }
};