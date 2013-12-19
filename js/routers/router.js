var NoteRouter = Backbone.Router.extend({

	routes: {
		"": "index",
		"note/:id": "viewNote"
	},

	index: function () {
		var view = new NotesView({ collection: this.collection});
		console.log("render index");
		console.log(this);
		this._renderView(view);
	},

	_renderView: function (view) {
		$('.content').html(view.render().el);
	},

	viewNote : function (id) {
		console.log("View note '" + id + "' requested");
		this.navigate("note/" + id);
	}

});

var noteRouter = new NoteRouter();

Backbone.history.start();