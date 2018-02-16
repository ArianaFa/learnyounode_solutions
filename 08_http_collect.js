var http=require('http');
 var bl = require('bl'); 
var url = process.argv[2];
var getreq = http.get(url, function(res) {
   res.setEncoding('utf8');
   
   res.pipe(bl(function (err, data){
 	if (err)
      return console.error(data);
    data = data.toString();
    console.log(data.length);
    console.log(data);
   })).on('error', function(e) {
  console.log("Got error: " + e.message);
});
});