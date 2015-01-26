/* global module:false */
"use strict";

/**
 * Strip config
 * @description removes console.log / console.debug etc..
 * @type {Object}
 */
module.exports = {
	main : {
	    src : "dist/public/js/**/*.js",
	    options : {
	        inline : true
	    }
	}
};