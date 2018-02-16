var http=require('http');
var bl = require('bl'); 
var count=0;
var results=[];

for ( var i= 2; i< 5; i++ ){
    
        http.get(process.argv[i],function() {
		var my_i= i;
return  function(res){
        	res.setEncoding('utf8');
            res.pipe(bl(function(err, data){
                if (err) {
                    return console.error(err);
  
                }
                
                results[my_i-2] = data.toString()
                
                count++;
                if ( count == 3 ) {
					for ( var j = 0; j < 3; j++ )
					console.log(results[j] );
				}
                
                    
               
            })).on('error', function(e) {
  console.log("Got error: " + e.message);
});
        };
        }() 

    )};
    