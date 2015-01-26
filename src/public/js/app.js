/* global requirejs:false, require:false */
"use strict";

requirejs.config({
	baseUrl: "/js",
	paths: {
		"jquery": "../components/jquery/dist/jquery",	
		"underscore": "../components/underscore/underscore",	
		"backbone": "../components/backbone/backbone",
		"hbs": "../components/require-handlebars-plugin/hbs",
		"handlebars": "../components/require-handlebars-plugin/hbs/handlebars",
		"TweenMax": "../components/greensock/src/uncompressed/TweenMax"
	},
	hbs: { // optional
		helpers: true,           
		i18n: false,             
		templateExtension: "hbs",
        partialsUrl: ""
	}
});

require([
	"app/ApplicationRouter"
], function() {
	
});