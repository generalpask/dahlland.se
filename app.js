const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const scss = require('./scss');
const router = express.Router();

app.use(express.static(__dirname + '/public/'));

//add the router
app.use('/', router);

// Load SCSS
var scssfile = 'public/stylesheets/main.scss'

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/views/content/about.html'));
});

app.get('/players',function(req,res){
    res.sendFile(path.join(__dirname+'/views/content/players.html'));
});

// Watch SCSS
scss.WatchSCSS(scssfile);

// Start the server
var port = 3300;
var server = app.listen(port, () => console.log('dahlland.se listening on port ' + port));

// Shutdown on Ctrl+C
process.on('SIGINT', function() {
	console.log('\x1b[34m'+'\nSIGINT received, shutting down...');
	process.stdout.write('\x1b[33m'+'Unwatching '+'\x1b[36m['+scssfile+']\x1b[33m'+'... ');
    fs.unwatchFile(scssfile);
    process.stdout.write('\x1b[32m'+'Done!\n'+'\x1b[0m');

	process.stdout.write('\x1b[33m'+'Closing server... ');
	server.close();
	process.stdout.write('\x1b[32m'+'Done!\n'+'\x1b[0m');

    console.log('Shutdown complete');
    process.exit();
});