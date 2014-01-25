var Note = Backbone.Model.extend({

	defaults: {
    title:  "", 
    createDate : "", //DATE
    editDate : "", //DATE
    content: ""
  }

  /**
  * CREATE A NEW FORMATTED DATE
  
  (function() {
    return moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  })
  
  */

});