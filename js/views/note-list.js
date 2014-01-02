var NoteListView = Backbone.View.extend({
	
	tagName: "ol",

	className: "note-list",

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "destroy", this.render);
	},

	render: function() {
		this.$el.html('');
		this.collection.each(function(note) {
			var noteSnippetView = new NoteSnippetView({ model: note});
			this.$el.append(noteSnippetView.render().el);
		}, this);
		return this;
	}

});