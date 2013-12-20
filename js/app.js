var bbnote = bbnote || {};

$(function() {
	new bbnote.NotesView();

	// ADD A NEW NOTE WITH 
	// bbnote.notesCollection.create({title: *TITLE*, content: *CONTENT* })

	// REMOVE A NOTE WITH 
	// bbnote.notesCollection.remove({id: *ID*})
});