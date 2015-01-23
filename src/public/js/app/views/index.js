define([
	'backbone', 
	'hbs!templates/view1'
], function(backbone, template) {

	// console.log('index view');

	var FormView = Backbone.View.extend({

		el: '#app form',

		events: {
			'submit': function (ev) {
				ev.preventDefault();

				console.log('Submit');

				Backbone.trigger('Index:Form:Submit', this);
			}
		},

		initialize: function() {
			console.log('Form init');
		}

	});

	var ListView = Backbone.View.extend({
		
		el: '#app .list', 

		initialize: function() {
			this.listenTo(Backbone, 'Index:Form:Submit', function(data) {
				console.log('Ok submitted', data.$el.find('.hello').val());
			});
		}
	});

	// new FormView();
	// new ListView();

	var IndexView = Backbone.View.extend({

		className: 'view-1', 

		initialize: function() {
			this.render();
		},

		render: function() {
			console.log('render');
			this.$el.html(template());
			$('#app').append(this.$el.html());
		}
	});

	new IndexView();

});