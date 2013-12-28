var bbnote = bbnote || {};

bbnote.NoteRouter = Backbone.Router.extend({
  routes: {
  	"": "index",
    "note/:id": "viewDetail"
  },

  index: function(){
  	console.log("you are at the index");
  	var notesView = new bbnote.NotesView({});
  },

  viewDetail: function(item){
  	console.log("you are viewing note " + item);
  	var detailView = new bbnote.NoteDetailView({model: item});
  	detailView.$el.append(detailView.render().el);
  }

});