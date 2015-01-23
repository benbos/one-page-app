requirejs.config({
	baseUrl: '/js/app',
	paths: {
		'jquery': '../../components/jquery/dist/jquery',	
		'underscore': '../../components/underscore/underscore',	
		'backbone': '../../components/backbone/backbone',
		'hbs': '../../components/require-handlebars-plugin/hbs',
		'handlebars': '../../components/require-handlebars-plugin/hbs/handlebars',
		'TweenMax': '../../components/greensock/src/uncompressed/TweenMax',
		'SplitText': '../../components/greensock/src/plugins/TextPlugin'
	},
	hbs: { // optional
		helpers: true,           
		i18n: false,             
		templateExtension: 'hbs',
		partialsUrl: ''
	}
});

require([
	'ApplicationRouter'
], function() {
	
	// console.log('hello backbone');
});