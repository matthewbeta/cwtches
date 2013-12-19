var NotesView = Backbone.View.extend({

	initialize: function(initialNotes) {
		this.collection = new NotesCollection( notes );
		this.listenTo(this.collection, "change", this.render);
		console.log(this.collection)
	},

	tagname: 'ul',
	className: 'notes',

	render: function() {
		this.collection.each(function(note) {
			var noteSnippet = new NoteSnippetView({ model: note});
			this.$el.append(noteSnippet.render().el);
		}, this);
		return this;
	}

});