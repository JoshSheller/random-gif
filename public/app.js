var app = angular.module('giphy', []);

app.factory('giphyAPI', function($http) {
  var collectGiphy = function(keyword) {
    return $http.get('http://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=dc6zaTOxFJmzC')
    .then(function(res) {
      return res.data;
    });
  };

  return {
    collectGiphy : collectGiphy
  };
});

app.controller('searchGiphy', function($scope, giphyAPI) {
  $scope.searchGifs = function(keyword) {
    giphyAPI.collectGiphy(keyword).then(function(data){
      $scope.data = data;
    });
  }
});