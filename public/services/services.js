angular.module('giphy.services', [])

.factory('GiphyAPI', function($http) {
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