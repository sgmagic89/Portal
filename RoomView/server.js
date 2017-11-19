var express = require('express'),
    path = require('path'),
    fs = require('fs');
var app = express();
var staticRoot ="/home/pi/Source/Portal/RoomView/dist" + '/';
app.set('port', (process.env.PORT || 4200));
app.use(express.static(staticRoot));
app.use(function(req, res, next){
console.log(req);
    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
console.log(accept);
        return next();
    }
    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }
    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});
app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});
