var app = angular.module('app',[]);


app.controller('mc',['$scope',function($scope){

    $scope.aa = function(data){
      console.log(data);
    };

}]);


