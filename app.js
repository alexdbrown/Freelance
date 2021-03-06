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
      },
      'stats': {
        templateUrl: "partials/stats.html",
        controller: 'StatsCtrl'
      }
    }
  });
});
