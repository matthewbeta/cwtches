var bbnote = bbnote || {};

bbnote.NoteSnippetView = Backbone.View.extend({

	tagName: "li",

	className: "snippet",

	events: {
		"click .btn--delete": "removeNote",
		"click .heading--snippet": "viewDetail"
	},

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(template) {
		var template = $("#noteSnippet").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		this.$el.html(html);
		return this;
	}, 

	removeNote: function() {
		this.model.destroy();
	},

	viewDetail: function(id) {
		id = this.model.id;
		bbnote.router.navigate("/note/" + id, {trigger: true});
	}

});