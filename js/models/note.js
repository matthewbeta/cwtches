var NoteModel = Backbone.Model.extend({

	url: "/",	
	defaults: {
    "title":  "No title",
    "createDate": new Date(),
    "editDate": new Date(),
    "content": ""
  },

  initialize: function(){
      
      console.log('This model has been initialized.');
      
      this.on("invalid", function(model, error){
        console.log(error);
    	});
      
      this.on('change:title', function(){
        console.log('- The title for this model have changed.');
    	});

  },

  validate: function(attributes){
  	if(attributes.title === undefined){
        return "Model am disappoint no title";
    }
  }

});