var bbnote = bbnote || {};

bbnote.NoteModel = Backbone.Model.extend({

	defaults: {
    title:  "New note",
    createDate : (function() {
    							return moment()
    										.format("dddd, MMMM Do YYYY, h:mm:ss a")
    							}),
    editDate : (function() {
  							return moment()
  										.format("dddd, MMMM Do YYYY, h:mm:ss a")
  							}),
    content: "Whats up?"
  }

});