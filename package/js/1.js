function fn(n){
    var arr = [];
    var max = 23 ;
    var min = 2;


    function creatNumber(){
        return parseInt(Math.random()*(max-min+1)+min);
    }

    for(var i= 0;i<n;i++){
        var num = creatNumber();

        if(arr.length == 0){
            arr.push(num);
            continue;
        }
        if(isNotSame(num)){
            arr.push(num)
        }else{
           i--;
        }
    }

    function isNotSame(num){
        for(var i=0;i<arr.length;i++){
            if(arr[i] == num){
                return false
            }
        }
        return true
    }
    //arr.sort(function(a,b){
    //    return a-b;
    //});
   return arr;
}

console.log(fn(9),eval(fn(9)).length);
