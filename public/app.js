var app = angular.module('giphy', []);

app.factory('giphyAPI', function($http) {
  var collectGiphy = function(keyword) {
    console.log('im inside collectGiphy');
    return $http({
      url: '/search',
      method: 'GET',
      params: {keyword: keyword}
    }).then(function(gifs) {
      console.log('gifs', gifs.data);
      return gifs.data;
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
      console.log('controller data', data);
      $scope.data = data;
    });
  }

  $scope.addFav = function(url) {
    $scope.favs.push(url);
    console.log($scope.favs);
  }
});