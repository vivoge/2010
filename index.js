var app = angular.module('app',[]);


app.controller('mc',['$scope',function($scope){
    $scope.userdata = {};

    $scope.aa = function(){
      console.log('提交数据中');
    };

}]);


app.directive('compare',function(){

    return {
        restrict:'AE',
        require:'ngModel',
        //scope:{
        //    orgtext:'=compare',
        //    org:'=ngModel'
        //},
        link:function(scope,element,attrs,ngctrl){
            ngctrl.$validators.compare = function(modelValue,viewValue){
                var val = viewValue || modelValue;
                return val == scope.$eval(attrs['compare']);
            };
            //scope.$watch('orgtext',function(){
            //    ngctrl.$validate();
            //})

            scope.$watch(function(){
                return scope.$eval(attrs['compare'])
            },function(newVal,oldVal){
                ngctrl.$setValidity('compare',scope.$eval(attrs['compare']) == scope.userdata.rePassword);
            })
        }
    }
});

