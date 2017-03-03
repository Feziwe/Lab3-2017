var express = require('express');
var router = express.Router();
var todoList = []; //our todo list array

var path = require('path');

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html'));
});

router.get('/create', function(req, res) {
	res.sendFile(path.join(__dirname, 'views', 'todo', 'create.html'));
});

router.get('/delete', function(req, res) {
	res.sendFile(path.join(__dirname, 'views', 'todo', 'delete.html'));
});

router.get('/edit', function(req, res) {
	res.sendFile(path.join(__dirname, 'views', 'todo', 'edit.html'));
});

module.exports = router;
