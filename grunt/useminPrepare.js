/* global module:false */
"use strict";

/**
 * Usemin prepare config
 * @type {Object}
 */
// module.exports = {
//     html: ["src/public/*.html", "src/public/js/templates/**/*.hbs"],
//     js: ["src/public/js/**/*.js"],
//     options: {
//         dest: "dist"
//     }
// };

module.exports = {
    html: "src/public/*.html",
    options: {
    	dest: "dist/public/"
    }
};