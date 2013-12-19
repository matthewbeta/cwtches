var NoteSnippetView = Backbone.View.extend({

	events: {
		"click .heading--snippet": "linkToNote"
	},

	tagname: "li",

	className: "snippet",

	render: function() {
		var template = $("#noteSnippet").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		// console.log(html);
		this.$el.html(html);
		return this;
	},

	linkToNote: function(e) {
		e.preventDefault();

		var id = this.model.get("id");
		// var url = "note/" + id;
		console.log(id)
		noteRouter.viewNote(id);
	}

});