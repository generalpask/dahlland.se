const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public/'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3300);

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/views/content/about.html'));
});

router.get('/players',function(req,res){
    res.sendFile(path.join(__dirname+'/views/content/players.html'));
});

console.log('dahlland.se is now active')
console.log('Running locally at port 3300');