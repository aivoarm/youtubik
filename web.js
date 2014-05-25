
/**
 * Module dependencies.
 */

var express = require('express')
 , routes = require('./routes')
  , http = require('http');

var app = module.exports = express.createServer();
//var server = http.createServer(app)

//var app = module.exports = express.createServer();


 
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  
  
  
  app.use(express.cookieParser('shhhh, very secret'));
 //app.use(express.session()); 
 
 app.use(app.router);
 app.use(express.static(__dirname + '/public'));
 app.use(express.favicon('/favicon.ico'));
  
  
});



app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes


require('./routes/index')(app);



app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
