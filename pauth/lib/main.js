(function(){

var faceauth = require('../bin/faceauth');
faceauth.write();

var server;
var http = require('http');
faceauth.connect(5000);

console.log('server is listening on 5000');
})(this)