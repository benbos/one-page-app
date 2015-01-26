/* global define:false,App:false */
"use strict";

define([
    "backbone",
    "app/views/IndexView",
    "app/views/ContactView",
], function(Backbone, IndexView, ContactView) {

    /**
     * Main Application object
     */
    window.App = {

        Extensions: {
            View: false
        },
        Router: false,
        Instance: false,

        Config: false,

        initConfig: function() {
            this.Config = $("body").data("config");
        },

        init: function() {

            // Init router
            new this.Router();

            // Init main view instance
            this.Instance = new this.Extensions.View();

            // Store config
            this.initConfig();

            // Start Backbone history
            Backbone.history.start({pushState: false});
        }

    };

    /**
     * Main View
     */
    App.Extensions.View = Backbone.View.extend({

        el: "#app",

        currentActiveView: false,

        goto: function(View) {

            var ViewObject = false;

            if(View) {
                ViewObject = new View();
            }

            // First hide current active view
            if(this.currentActiveView) {

                if(typeof this.currentActiveView.transitionOut === "function") {
                    this.currentActiveView.transitionOut();
                }
                else {
                    this.currentActiveView.remove();   
                }
            }
            
            if(ViewObject && typeof ViewObject === "object") {

                this.$el.append(ViewObject.$el);

                if(typeof ViewObject.transitionIn === "function") {
                    ViewObject.transitionIn();
                }

                this.currentActiveView = ViewObject;
            }
        }

    });

    /**
     * Main routing
     */
	App.Router = Backbone.Router.extend({

		routes: {
            "":         "index",
            "contact":  "contact"
        },

        contact: function() {
            App.Instance.goto(ContactView);
        },

		index: function() {
            App.Instance.goto(IndexView);
		}

	});

    /**
     * Init main Application object
     */
    App.init();

});