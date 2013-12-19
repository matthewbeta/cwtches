var NoteDetailView = Backbone.View.extend({

	tagname: "div",

	className: "note-detail",

	render: function() {
		var template = $("#noteDetail").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		// console.log(html);
		this.$el.html(html);
		return this;
	},

});