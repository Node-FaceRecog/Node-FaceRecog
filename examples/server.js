var express = require('express');

var pauth = require('x-jintoppy-auth');

var app = express();

app.use(express.static('./public'));

app.use(express.bodyParser());

pauth.connect(5000, app);
