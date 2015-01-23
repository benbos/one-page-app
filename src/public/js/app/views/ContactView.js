define([
	'backbone',
	'views/BaseView',
	'hbs!templates/ContactTemplate'
], function(Backbone, BaseView, template) {

	return BaseView.extend({

		className: 'view contact-view', 

		transitions: true,

		initialize: function() {
			this.render();

			this.listenToOnce(this, "Transition:transitionInComplete", function () {
				console.log('contactView - transitionInComplete');
			});

			this.listenToOnce(this, "Transition:transitionOutComplete", function () {
				console.debug('contactView - transitionOutComplete');
			});
		},

		render: function() {


			this.$el.html(template());

			return this.$el;

			// console.log('render');
			// 
			// $('#app').append(this.$el.html());
		}
	});

});