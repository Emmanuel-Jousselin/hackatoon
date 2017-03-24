angular.module('app')
    .service('searchService', function($http) {
        this.getAll = function(country) {
            return $http.get('https://webcamstravel.p.mashape.com/webcams/list/country=' + country, {
                headers: {
                    "X-Mashape-Key": "OXedZ7iUQimshR8yytdYAMJnXl1Yp1gsriKjsnwC2hmnNp9zL4"
                }
            })
        };
      })
