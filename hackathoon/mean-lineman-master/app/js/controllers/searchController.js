angular.module('app')
    .controller('SearchController', function($scope, searchService) {
      $scope.search = function() {
        console.log("hello to you");
          searchService.getAll().then(function(res) {
            $scope.search = res.data.result;
          })
          };
          $scope.search();
      })
