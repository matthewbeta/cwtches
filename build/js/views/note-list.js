var NoteListView = Backbone.View.extend({
	
	tagName: "ol",

	className: "note-list",

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "destroy", this.render);
	},

	render: function() {
		var noNotes = "<p class='no-notes'>You've got no notes. <a href='/#note'>Get writing!</a>";
				
		this.$el.html('');

		if (this.collection.length > 0) {
			this.collection.each(function(note) {
			var noteSnippetView = new NoteSnippetView({ model: note});
			this.$el.append(noteSnippetView.render().el);
		}, this);
		} else {
			this.$el.append(noNotes)
		}
		
		return this;
	}

});