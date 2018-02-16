var http=require('http');
var url = process.argv[2];
var getreq = http.get(url, function(res) {
   res.setEncoding('utf8');
   res.on('data',function(data){
console.log(data);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
});