/* global module:false */
"use strict";

/**
 * Filerev config
 * @type {Object}
 */
module.exports = {
    src: [
        "grunt/*.js",
        "Gruntfile.js",
        "src/public/js/**/*.js"
    ],
    options: {
        config: ".jscsrc",
        validateIndentation: 4
    }
};
