/* global define:false,_:false */
"use strict";

define([
	"backbone",
	"TweenMax"
], function(Backbone, TweenMax) {

	return Backbone.View.extend({

		transitionIn: function() {

			_.bindAll(this, "transitionInComplete");

			TweenMax.fromTo(this.$el, 0.4, {
				opacity: 0,
				top: -10
			}, {
				opacity: 1,
				top: 0,
				delay: 0.3,
				onComplete: this.transitionInComplete
			});			
		},

		transitionInComplete: function() {
			this.trigger("Transition:transitionInComplete");
		},

		transitionOut: function() {

			_.bindAll(this, "transitionOutComplete");

			TweenMax.to(this.$el, 0.4, {
				opacity: 0,
				top: -10, 
				onComplete: this.transitionOutComplete
			});		

		},

		transitionOutComplete: function() {
			
			this.trigger("Transition:transitionOutComplete");

			this.remove();
		},

	});
});