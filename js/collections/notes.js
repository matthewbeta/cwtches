var Notes = Backbone.Collection.extend({
	model: Note,
	localStorage: new Backbone.LocalStorage('bbnote')
});
