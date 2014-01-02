var NoteSnippetView = Backbone.View.extend({

	events: {
		"click .detail-link": "detailLink",
		"click .edit-link": "editLink"
	},

	tagName: 'li',

	className: 'note-snippet',
	
	render: function() {
		var template = _.template($('#noteSnippet').html() );
		this.$el.html(template(this.model.toJSON() ));
		return this;
	},

	detailLink: function(e){
		e.preventDefault();
		var id = this.model.get("id");
		var url = "note/" + id;
  	Backbone.Events.trigger("router:navigate", url);
	},

	editLink: function(e){
		e.preventDefault();
		var id = this.model.get("id");
		var url = "note/" + id + "/edit";
  	Backbone.Events.trigger("router:navigate", url);
	}

});