define(['backbone'], function() {

	var ListView = Backbone.View.extend({
		
		el: '#app .list', 

		initialize: function() {
			this.listenTo(Backbone, 'Index:Form:Submit', function(data) {
				console.log('Ok submitted from test.js', data.$el.find('.hello').val());
			});
		}
	});

	new ListView();

});