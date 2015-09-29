var Freelancerer = angular.module("Freelancerer", ["ui.router"]);
Freelancerer.config(function($stateProvider, $urlRouterProvider)

 {
  $stateProvider.state("home", {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: "partials/home.html",
        controller: 'SlideshowCtrl'
      }

    }
  });


  $stateProvider.state("slideshow", {
    url: "/slideshow",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/slideshow.html',
        controller: 'SlideshowCtrl'
      }
    }
  });

});
