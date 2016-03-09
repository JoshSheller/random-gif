var app = angular.module('giphy', [
  'ngRoute',
  'searchGiphy.controller',
  'giphy.services'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      // home page
      templateUrl: 'views/searchGiphy.html',
      controller: 'SearchGiphyController'
    })
    .otherwise({
      redirectTo: '/'
    });
});