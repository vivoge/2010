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

app.directive('zgcerror',['$compile',function($compile){
    return {
        restrict:'AE',
        require:'ngModel',
        link:function(scope,element,attrs,ngModelCtrl){
            var nscope = scope.$new(true);
            nscope.hasError = function(){
                return ngModelCtrl.$invalid && ngModelCtrl.$dirty
            };
            nscope.error = function(){
                return ngModelCtrl.$error;
            };

            var teml = $compile('<p ng-repeat="(key,value) in error()" class="help-block" ng-show="hasError()">{{key | error}}</p>');
            var tips = teml(nscope);
            element.after(tips);
        }
    }
}]);

app.filter('error',function(){
    var message = {
        'minlength':'长度小于3位',
        'email':'不是邮箱地址'

    };
    return function (input){
        return message[input];

    }
});

app.directive('unique',['$compile',function($compile){
    return{
        restrict:'AE',
        require:'ngModel',
        link:function(scope,element,attrs,ngModelCtrl){

        }

    };
    ]
});
























