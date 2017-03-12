var app = angular.module('app',[]);


app.controller('mc',['$scope',function($scope){

    $scope.openers = [
        {
            title: '标题一',
            content: '内容一'

        },{
            title: '标题二',
            content: '内容二'

        },{
            title: '标题三',
            content: '内容三'

        }
    ];

}]);

app.filter('error',function(){
    var message = {
        'minlength':'长度小于3位',
        'email':'不是邮箱地址',
        'unique':'名字重复'

    };
    return function (input){

        return message[input];

    }
});


//
//app.directive('compare',function(){
//
//    return {
//        restrict:'AE',
//        require:'ngModel',
//        //scope:{
//        //    orgtext:'=compare',
//        //    org:'=ngModel'
//        //},
//        link:function(scope,element,attrs,ngctrl){
//            ngctrl.$validators.compare = function(modelValue,viewValue){
//                var val = viewValue || modelValue;
//                return val == scope.$eval(attrs['compare']);
//            };
//            //scope.$watch('orgtext',function(){
//            //    ngctrl.$validate();
//            //})
//
//            scope.$watch(function(){
//                return scope.$eval(attrs['compare'])
//            },function(newVal,oldVal){
//                ngctrl.$setValidity('compare',scope.$eval(attrs['compare']) == scope.userdata.rePassword);
//            })
//        }
//    }
//});
//
//app.directive('zgcerror',['$compile',function($compile){
//    return {
//        restrict:'AE',
//        require:'ngModel',
//        link:function(scope,element,attrs,ngModelCtrl){
//            var nscope = scope.$new(true);
//            nscope.hasError = function(){
//                return ngModelCtrl.$invalid && ngModelCtrl.$dirty
//            };
//            nscope.error = function(){
//                return ngModelCtrl.$error;
//            };
//
//            var teml = $compile('<p ng-repeat="(key,value) in error()" class="help-block" ng-show="hasError()">{{key | error}}</p>');
//            var tips = teml(nscope);
//            element.after(tips);
//        }
//    }
//}]);


//app.directive('unique',function($http){
//    return{
//        restrict:'AE',
//        require:'ngModel',
//        link:function(scope,element,attrs,ngModelCtrl){
//           scope.$watch(attrs['ngModel'],function(newval){
//               $http({
//                   method:'POST',
//                   headers:{'Content-Type':'application/json'},
//                   url:'http://localhost:8080/user/check',
//                   data:{username:newval}
//               }).then(function success(data,status,headers,config){
//                   ngModelCtrl.$setValidity('unique',data.data.unique);
//                   console.log(data.data.unique);
//               },function error(data,status,headers,config){});
//
//           })
//        }
//    }
//});


app.directive('group',function(){
    return {
        restrict:'E',
        replace:true,
        transclude:true,
        template:'<div ng-transclude></div>',
        controller:function(){
            var openers = [];
            this.addopener = function(opener){
                openers.push(opener);
            };
            this.open = function(selopener){
                angular.forEach(openers,function(opener){
                    opener.show = false;
                });
                selopener.show = !selopener.show;
            };

        }

    }
});
app.directive('opener',function(){
    return {
        restrict:'E',
        replace:true,
        transclude:true,
        require:'^group',
        link:function(scope,element,attrs,groupCtrl){
           groupCtrl.addopener(scope);
            console.log(scope);
           scope.toggle = function(){
               groupCtrl.open(scope);
           }
        },
        templateUrl:'../template/showHide.html'
    }
});

