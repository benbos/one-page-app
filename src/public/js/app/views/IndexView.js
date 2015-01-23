define([
	'backbone',
	'TweenMax',
	'app/views/BaseView',
	'hbs!app/templates/IndexTemplate'
], function(Backbone, TweenMax, BaseView, template) {

	return BaseView.extend({

		className: 'view index-view', 

		transitions: true,

		events: {
			"Transition:transitionInComplete": function() {
				console.log('done transitionInComplete');
			}
		},

		initialize: function() {

			this.render();

			this.listenToOnce(this, "Transition:transitionInComplete", function () {

			});

			this.listenToOnce(this, "Transition:transitionOutComplete", function () {
				
			});
		},

		render: function() {

			this.$el.html(template());

			return this.$el;
		}
	});

});