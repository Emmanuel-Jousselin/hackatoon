angular.module('app')
    .controller('apiController', function($scope,apiService) {
        $scope.webcam = function() {
            apiService.getAll().then(function(res) {
                $scope.webcam = res.data.result;
                console.log(res.data.result);
            });
        };
        $scope.webcam();
    });
