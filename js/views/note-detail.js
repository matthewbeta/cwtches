var bbnote = bbnote || {};

bbnote.NoteDetailView = Backbone.View.extend({
	className: "note__detail",

	events: {
		//"click .btn--delete": "removeNote",
		//"click .btn--edit": "editNote"
	},

	initialize: function() {
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function(template) {
		var template = $("#noteDetail").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		this.$el.html(html);
		return this;
	}
});