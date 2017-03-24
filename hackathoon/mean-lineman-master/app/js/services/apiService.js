angular.module('app')
    .service('apiService', function($http) {

        this.getAll = function(){
              return $http.get('https://webcamstravel.p.mashape.com/webcams//list/orderby=random?show=webcams:image,location,url&lang=fr', {
                      headers: {"X-Mashape-Key": "OXedZ7iUQimshR8yytdYAMJnXl1Yp1gsriKjsnwC2hmnNp9zL4"}
  })};
});
