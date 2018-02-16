var http=require('http');
var url=require('url');
var server = http.createServer(function (req, res) {
	 req.setEncoding('utf8'); 
	 var answer=url.parse(req.url, true); 

var ret = {};
switch(answer.pathname) {
case '/api/parsetime':
var date = new Date( answer.query.iso);
ret.hour= date.getHours();
ret.minute= date.getMinutes();
ret.second= date.getSeconds();
break;
case '/api/unixtime':
var date = new Date( answer.query.iso);
ret.unixtime= date.getTime();
break;
default:
return res.writeHead( 404 ).end();
}

 res.writeHead(200, { 'Content-Type': 'application/json' }); 
res.end( JSON.stringify( ret ) );
	});





server.listen(Number(process.argv[ 2 ]),function(){
     	console.log("Server bound");
     }); 