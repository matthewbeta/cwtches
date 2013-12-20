var bbnote = bbnote || {};

bbnote.NoteModel = Backbone.Model.extend({

	defaults: {
    title:  "New note",
    createDate : (function() {return new Date()}),
    editDate : (function() {return new Date()}),
    content: "Whats up?"
  }

});