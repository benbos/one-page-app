define([
	'backbone',
	'TweenMax',
	'views/BaseView',
	'hbs!templates/IndexTemplate'
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
				console.log('indexView - transitionInComplete');
			});

			this.listenToOnce(this, "Transition:transitionOutComplete", function () {
				console.debug('indexView - transitionOutComplete');
			});
		},

		render: function() {

			this.$el.html(template());

			return this.$el;
		}
	});

});