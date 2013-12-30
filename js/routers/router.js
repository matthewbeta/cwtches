var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "note/:id": "note"
  }
});

var router = new Router;

router.on('route:home', function() {
  noteListView.render();
})

router.on('route:note', function(id) {
  noteView.render({id: id});
})

Backbone.history.start();