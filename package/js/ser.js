var http = require('http');
var fs =require('fs');
var users = ['Admin','vivoge'];

var ser = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
   if(req.url == '/user/check'){
       var str = '';
       req.setEncoding('utf-8');
       req.on('data',function(data){
         str+=data;
       });
       req.on('end',function(data){
           var contentType = req.headers['content-type'];
           if(contentType == 'application/json'){
               var json = JSON.parse(str);
               var username = json.username;
               res.end(JSON.stringify({unique:users.indexOf(username) == -1}));
           }else{
              res.end('404');
           }


       })
   }
});

ser.listen('8080',function(){
    console.log('OK');
});
