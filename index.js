var app = angular.module('app',[]);


app.controller('mc',['$scope',function($scope){
    $scope.name = '1';
    $scope.aa = function(){
      console.log('1');
    };

}]);
