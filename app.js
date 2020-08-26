const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development';

app.use(express.static(__dirname + '/public/'));

//add the router
app.use('/', router);

// Load SCSS
var scssfile = 'public/stylesheets/main.scss'

// Watch SCSS if devving
if (environment == 'development') {
    const scss = require('./scss');
    scss.WatchSCSS(scssfile);
}

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/views/content/about.html'));
});

app.get('/players',function(req,res){
    res.sendFile(path.join(__dirname+'/views/content/players.html'));
});

// Start the server
var port = 3300;
var server = app.listen(port, () => {
    if (environment == 'production') {
        console.log('\x1b[34m'+'\nSTARTING SERVER FOR PRODUCTION'+'\x1b[0m');
        console.log('dahlland.se listening on port ' + port);
    }
    console.log('port ' + port);
});

// Shutdown on Ctrl+C
process.on('SIGINT', function() {
	console.log('\x1b[34m'+'\nSIGINT received, shutting down...');

    if (environment == 'development') {
        process.stdout.write('\x1b[33m'+'Unwatching '+'\x1b[36m['+scssfile+']\x1b[33m'+'... ');
        fs.unwatchFile(scssfile);
        process.stdout.write('\x1b[32m'+'Done!\n'+'\x1b[0m');
    }

	process.stdout.write('\x1b[33m'+'Closing server... ');
	server.close();
	process.stdout.write('\x1b[32m'+'Done!\n'+'\x1b[0m');

    console.log('Shutdown complete');
    process.exit();
});