var bbnote = bbnote || {};

bbnote.NotesCollection = Backbone.Collection.extend({

	model: bbnote.NoteModel,
 	// Save all of the notes under the `"bbnote"` namespace.
  localStorage: new Backbone.LocalStorage('bbnote')
	
});

bbnote.notesCollection = new bbnote.NotesCollection()