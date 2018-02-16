var mymodule = require('./my_module.js') 
var path = require('path');
var dir = process.argv[2];
var filterExtension = process.argv[3];

var node = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}
mymodule(dir, filterExtension, node);