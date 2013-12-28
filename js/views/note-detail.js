var bbnote = bbnote || {};

bbnote.NoteDetailView = Backbone.View.extend({
	
	el: "#app",

	className: "note__detail",

	events: {
	},

	initialize: function() {
		console.log("Note " + this.model + " detail view init" );
	},

	render: function(template) {
		console.log(this)
		var template = $("#noteDetail").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		this.$el.html(html);
		return this;
	}
	
});