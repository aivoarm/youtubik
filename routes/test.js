




module.exports = function(app) {
    
  
    
    app.get('/test', function(req, res){  
        
       
        
     var youtube = require('youtube-feeds')
        
        youtube.httpProtocol = 'https'
    
       youtube.feeds.videos(
    {
       
        q:   "home"
        ,
        'max-results':    1,
        orderby:        'published'
    }, callback)
       
      
     
        
       
        function callback( err, data ) {
    if( err instanceof Error ) {
        console.log( err )
    } else {
         res.send({ data: data});
    }
}

    

     
  
        

});
}