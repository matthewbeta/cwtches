var bbnote = bbnote || {};

bbnote.NoteSnippetView = Backbone.View.extend({

	tagName: "li",

	className: "snippet",

	render: function(template) {
		var template = $("#noteSnippet").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		this.$el.html(html);
		return this;
	}

});