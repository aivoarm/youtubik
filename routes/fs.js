
var path = require("path");
var fs=require('fs');

module.exports = function(app) {


//console.log(path.dirname(__dirname))



app.get('/fs', function(req, res) {

    //res.render('fs')
  // The filename is simple the local directory and tacks on the requested url
  //var filename =(path.dirname(__dirname)+"/uploads/personal finance.mp4");
  var filename =(path.dirname(__dirname)+"/uploads/Order Complete - Best Buy Canada.pdf");

 var fileStream=fs.createReadStream(filename);
  // This will wait until we know the readable stream is actually valid before piping
  fileStream.on('open', function () {
        fileStream.pipe(res);

  fileStream.on('error', function(err) {
         res.end(err);
     });
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  
})
var path = require('path');
var mime = require('mime-content');


var file = path.dirname(__dirname) + '/uploads/v.mp4'




}