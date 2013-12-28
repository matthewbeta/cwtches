var bbnote = bbnote || {};

bbnote.NotesView = Backbone.View.extend({

	el: "#app",

	className: "note-snippets",
	
	initialize: function() {
		this.listenTo( bbnote.notesCollection, 'add', this.renderSnippet );
		bbnote.notesCollection.fetch();
	}, 

	render: function() {
		bbnote.notesCollection.each(function(item) {
			this.renderSnippet(item);
		}, this);
	},

	renderSnippet: function(item) {
		var noteSnippet = new bbnote.NoteSnippetView({
			model: item
		});
		this.$el.append(noteSnippet.render().el);
	}

});