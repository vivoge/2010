var app = angular.module('app',[]);

app.controller('mc',['$scope',function($scope){
    $scope.name = '1';
    $scope.aa = function(){
      console.log('1');
    };

}]);

app.directive('time',['dateFilter',function(dateFilter){
    return {
        restrict:'A',
        transclude:true,
        template:'<div ng-transclude></div>',
        link:function(scope,element,attrs){

            var times = attrs['time'];
            console.log(times, dateFilter(new Date,'yyyy/mm/dd'));
        }
    }
}]);
