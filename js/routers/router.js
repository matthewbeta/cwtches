var Router = Backbone.Router.extend({
  // routes: {
  //   "": "home",
  //   "note/:id": "note",
  //   "note/:id/edit": "edit",
  // }
  initialize: function() {
			var self = this;
			this._setupCollection();
			Backbone.Events.on("router:navigate", function(url) {
        self.navigate(url, { trigger: true });
      });
    },
		routes: {
			"" 					: "index",
			"note/:id" 	: "noteDetail"
		},
		_setupCollection: function() {
			if(this.collection) return;
			this.collection = new Notes();
			this.collection.fetch();
			console.log("_setupCollection");
			console.log(this.collection);
		},
		_renderView: function(view) {
			$('#app').html(view.render().el);
		},
		index: function() {
			console.log("router>index() called")
			var view = new NoteListView({ collection: this.collection});
			this._renderView(view);
		},
		noteDetail: function(id) {
			console.log("router>noteDetail() called")
			var view = new NoteView({model: this.collection.get(id)});
			this.navigate("note/" + id, {trigger: true});
			this._renderView(view);

		}
});

// var router = new Router;

// router.on('route:home', function() {
//   noteListView.render();
// });

// router.on('route:note', function(id) {
//   noteView.render({id: id});
// });

// router.on('route:edit', function(id) {
//  	console.log("edit route requested");
// })

// Backbone.history.start();