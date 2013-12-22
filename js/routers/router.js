var bbnote = bbnote || {};

bbnote.NoteRouter = Backbone.Router.extend({
  routes: {
    "note/:id": "viewDetail"
  },

  viewDetail: function(id){
  	console.log("you are viewing note " + id);
  }

});