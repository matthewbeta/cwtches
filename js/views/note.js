var NoteView = Backbone.View.extend({

	// el: "#app",

	events: {
		"click .btn--edit": "editNote",
		"click .btn--delete": "deleteNote"
	},

	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	},

	render: function() {
		var template = _.template( $('#note').html() );
		this.$el.html( template( this.model.toJSON() ) );

		return this;
	},

	editNote: function(e) {

		e.preventDefault();
		var id = this.model.get("id");
		var url = "note/" + id + "/edit";
  	Backbone.Events.trigger("router:navigate", url);
	
	},

	deleteNote: function(e) {
		e.preventDefault();

		this.model.destroy({
			success: function(model, response) {
  			Backbone.Events.trigger("router:navigate", "/"); 
			}
		})
				
	}

});