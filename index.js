var express = require('express');
var app = express();
var port = 3000;

//loading our routers
//var mainRouter = require("./mainRouters");
var todoRouter = require("./todoRouters");

//mounting our routers
//app.use('/',mainRouter);
app.use('/todo',todoRouter);

app.listen(port);
console.log('Express server running on port 3000');

