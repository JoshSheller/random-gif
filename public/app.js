var app = angular.module('giphy', []);

app.factory('giphyAPI', function($http) {

  var collectGiphy = function() {
    return $http.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
    .then(function(res) {
      return res.data;
    });
  };

  return {
    collectGiphy : collectGiphy
  };
});

app.controller('findGiphy', function($scope, giphyAPI) {

  $scope.data;
  $scope.searchGiphyByName = function() {
    giphyAPI.collectGiphy().then(function(data){
      $scope.data = data;
    });
  }
});