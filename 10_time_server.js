var net=require('net');

var server = net.createServer(function(c) { //'connection' listener
	var date=new Date();
	var extentionToZero=function(value){
		return ( value<= 9 ? '0' : '' ) + value;

	}
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.write(date.getFullYear() +'-'+extentionToZero(date.getMonth()+1)+'-'+extentionToZero(date.getDate())+' '+extentionToZero(date.getHours())  
    +':'+extentionToZero(date.getMinutes())+'\n');
  c.pipe(c);
  c.end();
});
server.listen(Number(process.argv[ 2 ] ), function() { //'listening' listener
  console.log('server bound');
});