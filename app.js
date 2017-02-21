let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let compression = require('compression');
let index = require('./reoute/index');
let layouts = require('./api/layouts');
let upload = require('./api/upload');

let app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(compression()); //use compression
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads/images')));
app.use('/api', layouts);
app.use('/upload', upload);
app.use('/', index);

process.on('uncaughtException', function (err) {
    console.error(err);
});

module.exports = app;
