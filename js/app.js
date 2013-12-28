var bbnote = bbnote || {};


  bbnote.router = new bbnote.NoteRouter();
  Backbone.history.start();


$(function() {
	//new bbnote.NotesView();

	// ADD A NEW NOTE WITH 
	// bbnote.notesCollection.create({title: *TITLE*, content: *CONTENT* })

	// REMOVE A NOTE WITH 
	// bbnote.notesCollection.remove({id: *ID*})
});