var app = angular.module('app',[]);


app.controller('mc',['$scope',function($scope){
    $scope.userdata = {};
    $scope.name = '2';
    $scope.aa = function(){
      console.log('提交数据中');
    };

}]);

app.directive('compare',function(){
    return {
        restrict:'AE',
        require:'ngModel',
        scope:{
            orgtext:'=compare'
        },
        link:function(scope,element,attrs,ngctrl){
            ngctrl.$validators.compare = function(modelValue,viewValue){
                var val = viewValue || modelValue;
                return val == scope.orgtext
            };
            scope.$watch('orgtext',function(){
                ngctrl.$validate();
            })

        }
    }
});

