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

// app.factory('favorites', function() {
//   var addToFavs = function(fav) {
//     $scope.favs.push(fav);
//   };

//   return {
//     addToFavs : addToFavs
//   };
// });

app.controller('searchGiphy', function($scope, giphyAPI) {
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