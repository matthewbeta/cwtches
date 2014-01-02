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
			"" 							: "index",
			"note/:id" 			: "noteDetail",
			"note/:id/edit" : "noteEdit",
			"note" 					: "noteNew"
		},

		_setupCollection: function() {
			if(this.collection) return;
			this.collection = new Notes();
			this.collection.fetch();
		},

		_renderView: function(view) {
			$('#app').html(view.render().el);
		},

		index: function() {
			var view = new NoteListView({ collection: this.collection});
			this._renderView(view);
		},

		noteNew: function() {
			var note = new Note();
			var view = new NoteEditView({
				model: note,
				collection: this.collection
			});
			this.navigate("note", {trigger: true});
			this._renderView(view);
		},

		noteEdit: function(id) {
			var view = new NoteEditView({
				model: this.collection.get(id)
			});
			this.navigate("note/" + id + "/edit", {trigger: true});
			this._renderView(view);
			$("#noteContent").flexible();
		},

		noteDetail: function(id) {
			var view = new NoteView({
				model: this.collection.get(id)
			});
			this.navigate("note/" + id, {trigger: true});
			this._renderView(view);
		}
});