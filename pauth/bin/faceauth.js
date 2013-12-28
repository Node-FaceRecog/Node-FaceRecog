module.exports = function()
{
    var animal = 'kitties';
	var http, express, app, server;
    function write()
    {
        console.log(animal);
    }

function listen (server, options, fn) {
  if ('function' == typeof server) {
    console.warn('Socket.IO\'s `listen()` method expects an `http.Server` instance\n'
    + 'as its first parameter. Are you migrating from Express 2.x to 3.x?\n'
    + 'If so, check out the "Socket.IO compatibility" section at:\n'
    + 'https://github.com/visionmedia/express/wiki/Migrating-from-2.x-to-3.x');
  }

  if ('function' == typeof options) {
    fn = options;
    options = {};
  }

  if ('undefined' == typeof server) {
    // create a server that listens on port 80
    server = 80;
  }

  if ('number' == typeof server) {
    // if a port number is passed
    var port = server;

    if (options && options.key)
      server = require('https').createServer(options);
    else
      server = require('http').createServer();

    // default response
    server.on('request', function (req, res) {
      res.writeHead(200);
      res.end('Welcome to socket.io.');
    });

    server.listen(port, fn);
  }

}

    function connect(port, expressApp){
    		http = require('http');
            // server = http.createServer(function (req, res) {
            //   res.writeHead(200, {'Content-Type': 'text/plain'});
            //   res.end('okay');
            // });
            if(!expressApp){
               express = require('express');
               app = express(); 
            }
            else{
                app = expressApp;
            }
    		app.listen(port);
    		initialize();
    }

    function signupcall(){
        var options = {
          hostname: 'http://localhost:5000',
          port: 5000,
          path: '/signup',
          method: 'GET'
        };

        var req = http.request("http://localhost:5000/signup", function(res) {
          console.log('STATUS: ' + res.statusCode);
          console.log('HEADERS: ' + JSON.stringify(res.headers));
          res.setEncoding('utf8');
          res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
          });
        });

        req.on('error', function(e) {
          console.log('problem with request: ' + e.message);
        });
        
        // write data to request body
        req.write("sdfsdfl");
        req.end();
    }

    // function initialize(){
    //     signupcall();
    // }


    function initialize(){
    	app.get("/signup", function(req, res){
            console.log("Got response: " + res.statusCode);
            var file = req.param("inputfile");
		  	//console.log('good one');
            res.send(file);
      });
      var fs = require('fs');
      app.get("/socketclient.js", function(req,res){
          //res.sendfile('bin/faceauth.client.js'=);
          res.sendfile('node_modules/x-jintoppy-auth/bin/faceauth.client.js');
      });

    }

    return {
        write: write,
        connect: connect,
        listen: listen
    };
}();

