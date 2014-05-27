

module.exports = function(app) {
     
    app.get('/test.json', function(req, res){  
     
      var youtube = require('youtube-feeds')
        
        youtube.httpProtocol = 'https'
    
       youtube.feeds.videos(
    {
       
        q: req.query.q || "cute baby" ,
        'max-results':    req.query.max || 5,
        orderby:        'published'
    }, callback)
       
      
    function callback( err, data ) {
    if( err instanceof Error ) {
        console.log( err )
    } else {
          res.json(data.items);  
         res.render('test', 
                    {title : "Title", data: data.items} );
    }
}

   

     
  
        

});
}