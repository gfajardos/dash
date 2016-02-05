var express = require('express')
var twt = require('./twitter')

var app = express()

app.get('/', function (req, res) {
    var parser = new twt();
    res.send(parser.search("@portalmvd"))
})

app.listen(3000)
