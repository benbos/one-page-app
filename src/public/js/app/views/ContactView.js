/* global define:false */
"use strict";

define([
    "backbone",
    "app/views/BaseView",
    "hbs!app/templates/ContactTemplate"
], function(Backbone, BaseView, template) {

    return BaseView.extend({

        className: "view contact-view",

        transitions: true,

        initialize: function() {

            this.render();

            this.listenToOnce(this, "Transition:transitionInComplete", function() {});

            this.listenToOnce(this, "Transition:transitionOutComplete", function() {});
        },

        render: function() {

            this.$el.html(template());

            return this.$el;
        }
    });

});
