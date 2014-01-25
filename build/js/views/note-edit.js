var NoteEditView = Backbone.View.extend({

	className: "note__edit",
	
	events: {
		"click .btn--save": "saveNote",
		"click .btn--delete": "deleteNote"
	},

	initialize: function() {

	},

	render: function() {
		var template = _.template( $('#noteEdit').html() );
		this.$el.html( template( this.model.toJSON() ) );

		return this;
	},

	saveNote: function(e) {
		e.preventDefault();

		var title = $("#noteTitle").val().trim();
		var content = $("#noteContent").val();

		if (this.model.id) {
			var that = this;
			var note = {
				title: title, 
				content: content, 
				editDate: new Date()
				//moment(editDate).fromNow()
				//moment(editDate).format("dddd, MMMM Do YYYY, h:mm:ss a")
			};
			that.model.save(note, {
				success: function() {
					Backbone.Events.trigger("router:navigate", "/note/" + that.model.id);
				},
				error: function(model, response, options) {
					console.error("Couldn't save "+ model + " because " + response)
				}


			});
			
		} else {
			this.collection.add(this.model);
			this.model.save({
				title: title,
				content: content,
				createDate: new Date()
				//moment(createDate).fromNow()
				//moment(createDate).format("dddd, MMMM Do YYYY, h:mm:ss a")
			}, {
				success: function(model, response, options) {
					Backbone.Events.trigger("router:navigate", "note/" + response.id );
				},
				error: function(model, response, options) {
					console.error("Couldn't save "+ model + " because " + response)
				}
			});
		}
		

	},
	deleteNote: function(e) {
		e.preventDefault();

		this.model.destroy({
			success: function(model, response) {
  			Backbone.Events.trigger("router:navigate", "/"); 
			},
			error: function(model, response, options) {
					console.error("Couldn't delete "+ model + " because " + response)
				}
		})
	}

});