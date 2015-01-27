/* global module:false */
"use strict";

/**
 * Requirejs config
 * @description compiles requirejs apps.
 * @type {Object}
 */
module.exports = {
    compile: {
        options: {
            name: "app",
            baseUrl: "src/public/js",
            mainConfigFile: "src/public/js/app.js",
            out: "dist/public/js/app.min.js",
            preserveLicenseComments: false
        }
    }
};
