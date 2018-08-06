$(document).ready(function(){
  var app = {}

  app.routes = [
    {
      path: "#",
      template: "home",
    },
    {
      path: "#/about",
      template: "about"
    },
    {
      path: "#/products",
      template: "products"
    },
    {
      path: "#/contact",
      template: "contact"
    }
  ]

  app.init = function(){
    app.load(window.location.hash);
  }

  app.load = function(path){
    var exclude = []
    var transition = null;
    app.routes.forEach(function(route){
      if(path === route.path){
        transition = route
      }
    });

    if(!transition){
      $("#home").removeClass("invisible").addClass("visible")
      transition = app.routes[0];
      window.location.hash = '#';
    } else {
      $("#" + transition.template).removeClass("invisible").addClass("visible")
    }

    app.routes.forEach(function(route){
      if(route.path != transition.path){
        $("#" + route.template).removeClass("visible").addClass("invisible")
      }
    })
  }

  $(window).on('hashchange', function() {
    app.load(window.location.hash)
  });


  app.init();

});
