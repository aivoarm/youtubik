
/*
 * GET home page.
 */

module.exports = function(app) {
    app.get('/', function(req, res){
       res.render('index')
    });
    app.get('/sitemap.xml', function(req, res){
       res.send('\
       <?xml version="1.0" encoding="UTF-8"?>\
<urlset\
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->\
\
<url>\
  <loc>http://koogl.com/</loc>\
</url>\
<url>\
  <loc>http://koogl.com/game</loc>\
</url>\
<url>\
  <loc>http://koogl.com/socket</loc>\
</url>\
</urlset>'
  
       )
    });
};