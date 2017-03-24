angular.module('app')
    .controller('SearchController', function($scope, searchService) {
        $scope.query = '';
        $scope.webcams = []
        $scope.search = function() {
            searchService.getAll($scope.query).then(function(res) {
              console.log(res.data);
                $scope.webcams = res.data.result.webcams;
            })
        };
    })
