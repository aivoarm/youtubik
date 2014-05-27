        
        
        
        $(init);
        
        function init() {
        var url =  callme("best for kids");
        
          Item = Backbone.Model.extend();

          List = Backbone.Collection.extend({
            model: Item,
            url:url,
            parse: function(response) {//console.log(response.data.items); 
            return response.data.items;}
            
          });    
        
           ListView = Backbone.View.extend({    
            el: $('#bot'),
            
             events: {
              'click button#add': 'getPost'
            },
            initialize: function(){
              _.bindAll(this, 'render');
              this.collection = new List();
              this.template = _.template($('#data-template').html())
           
              this.render(); 
            },
            render: function(){
              var self = this;      
              
             this.collection.fetch({
                  success: function(data){
                    //  console.log(data.models[0]);
                  //$(self.el).append(data.models[0])
                
                     for(var i=0; i< self.collection.models.length; i++){
                         
                       
                         
                          self.$el.append(self.template({data: self.collection.models[i]}));
                        
                     };
                    
                    
                   
                     return self;
                    
                     }, error: "non"
                  })
              
               
               
                  
               //var data =this.collection.bind('reset', this.render, this);
             
            }
        
          });

  // **listView instance**: Instantiate main app view.
         var listView = new ListView();
        
       
     
        
       $.getJSON(url, function(data){
           
        //#  $("#container").html(JSON.stringify(data))
       })
        
       
        }
        
        
	
    
    
    
    function callme(str) {
	
	
	//alert('clicked');
        var videoUrl='http://www.youtube.com/embed/'
		var srch = str;//'how%20to%20fix%20'+
		var category='';//'/-/HowTo';
		var MAX = 49;
		var hiviews = 1;
		
		var url='http://gdata.youtube.com/feeds/api/videos'+category+'?v=2&alt=jsonc&orderby=viewCount&max-results=50&q='+srch;
		
		return url;
   
	

    }   //end 
    
    
    /*
    
      var ListView = Backbone.View.extend({    
            el: $('#bot'),
            events: {
              'click button#add': 'getPost'
            },
            initialize: function(){
              _.bindAll(this, 'render', 'getPost');
              this.collection = new List();
              this.render(); 
            },
            render: function(){
              var self = this;      
              $(this.el).append("<button id='add'>get</button>");
            },
            getPost: function(){
                
              var data=this.collection.fetch()
              console.log(data.attributes)
                  
               //var data =this.collection.bind('reset', this.render, this);
                
                $('#container').append(JSON.stringify(data))
            
             
            }
            */