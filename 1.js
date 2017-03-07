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
            arr.push(num)
        }
        if(same(num)){
            arr.push(num)
        }else{
           n-1;
           continue;
        }
    }

    function same(num){
        for(var i=0;i<arr.length;i++){
            if(arr[i] == num){
                return false
            }
        }
        return true
    }

   return arr;
}

console.log(fn(8));