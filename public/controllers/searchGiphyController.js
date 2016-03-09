angular.module('searchGiphy.controller', ['giphy.services'])

.controller('SearchGiphyController', function($scope, giphyAPI) {
  $scope.favs = [];
  $scope.searchGifs = function(keyword) {
    giphyAPI.collectGiphy(keyword).then(function(data){
      $scope.data = data;
    });
  }
  $scope.addFav = function(url) {
    $scope.favs.push(url);
    console.log($scope.favs);
  }
});