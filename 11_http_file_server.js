 var http = require('http')  
 var fs = require('fs')
     var server = http.createServer(function (req, res) {  
       // request handling logic...
       req.setEncoding('utf8'); 
       res.writeHead(200, {'Content-Type' : 'text/plain' } ); 
var file=fs.createReadStream(process.argv[ 3 ]).pipe(res);

     })  
     server.listen(Number(process.argv[ 2 ] ),function(){
     	console.log("Server bound");
     });  
