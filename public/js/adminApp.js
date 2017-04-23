var quote = angular.module('quote' , ['ngAnimate',
  'ui.router',
  'LocalStorageModule',
  'ngSanitize',
  'angularUtils.directives.dirPagination'])
  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/home2.html",
      controller : 'homeController'
    })
      .state('again' , {
          url: '/again/',
          templateUrl: "../views/again.html",
          controller: 'againController'
      })
  });
