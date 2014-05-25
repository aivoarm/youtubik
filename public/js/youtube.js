        
        
        
        $(init);
        
        function init() {
            //code
        
	
	
       
     
	  
	//alert(str);
	//searchme();
	
	
     
        
        loader = $('#loader');
        loader.fadeOut();
        
            var str="best for kids"
	    
            call(str);
            
         
	
    
    function call(str) {
	
       
        
	
	//alert('clicked');
        var videoUrl='http://www.youtube.com/embed/'
		var srch = str;//'how%20to%20fix%20'+
		var category='';//'/-/HowTo';
		var MAX = 49;
		var hiviews = 1;
		
		var url='http://gdata.youtube.com/feeds/api/videos'+category+'?v=2&alt=jsonc&orderby=viewCount&max-results=50&q='+srch;
		
    $.getJSON(url,function(data){

        
         var sr=[];
      
	for(var i=0; i < 40;i++){
		sr.push(data.data.items[i]);
		}
	
	
            //

           // alert('check');
            
     for(var i=0; i < 40;i++){
       //alert(JSON.stringify(sr[1].player.default )); 
         var myviewCount = data.data.items[i].viewCount;
         
         var item = '<div class="imgcover"><img class="player2" '+
            'src="'+sr[i].thumbnail.sqDefault+'">'+
            '<p id="discr"> title: '+sr[i].title + ' <hr/>veiws: '+ sr[i].viewCount+ '<hr/>likes: ' +
	     sr[i].likeCount+ '<hr/>updated: ' +sr[i].updated.split('T')[0]+'</p>'+
            '<input class="id" type="hidden" value="'+sr[i].id+'">'+
            '</div>' ; 
       // 
       
            
        
          if(myviewCount>0){
                    $('.items').append(item);
		    }else{
                    $('.items').append('<img class="player2" '+
            'src="'+sr[i-1].thumbnail.sqDefault+'">');
		    }
   
    } //end of for loop
    
     $('.imgcover').click(function(){
        
        var id = $(this).find('.id').val();
        //alert(id);
        var fraim = '<iframe id="player" type="text/html" width="640" height="390" src="'+
        videoUrl + id + '" frameborder="0"></iframe>'
        
	
	vin();
	
       
	  
	  
         $('#videos').html('');
        $('<p >Click to close</p>' + fraim).appendTo($('#videos'));
       // alert(sr[i].id)
    });  //end of click for video in/out
    
    vout();
    
   
      videoIs();
	    
    }); //end get.JSON()
    
   
    }   //end function call(str)
   
   
        
        
             
            $('#srch').blur(function(){
                $('.items').html('');	
               	 $('items').show();
		str=$('#srch').val();
		loader.fadeIn();
                call(str);
                
                });
            $('#srch').keypress(function(){
                $('.items').html('');	
               	 $('items').show();
		str=$('#srch').val();
		loader.fadeIn();
                call(str);
                
                });
	    
	    
	    var typingTimer;                //timer identifier
	var doneTypingInterval = 5000;  //time in ms, 5 second for example

	//on keyup, start the countdown
	$('#srch').keyup(function(){
	    typingTimer = setTimeout(doneTyping, doneTypingInterval);
	});
	
	//on keydown, clear the countdown 
	$('#srch').keydown(function(){
	    clearTimeout(typingTimer);
	     loader.fadeIn();
	});
	
	//user is "finished typing," do something
	function doneTyping () {
	  loader.fadeOut();
	    //do something
	     $('.items ').text('');	
			str=$('#srch').val()
		call(str);
		
		
		
	}
	    
	  function vout(){
	    videoIs=false;
	     $('#videos').click(function(){
	    $(this).fadeOut('slow');
	
	    cssReset();
	    });
	     
	  }
	  
	   function vin(){
	    videoIs=true;
	     $('#videos').fadeIn('slow');
	 cssSmall()
	   }
	   
	   function cssSmall() {
	    //code
	     $('.scrollable').css('height', '80px');
	  $('.items div').css('width', '80px');
	  $('.items').css('padding-top', '0');
	   }
	   
	 function cssReset() {
	    //code
	    $('.scrollable').css('height', '380px');
	     $('.items div').css('width', '200px');
	     $('.items').css('padding-top', '20px');
	   }
    	
	function videoIs(){
	    if ($('#videos').css('display')=='visible') {
		cssSmall();
	    }else{
		cssReset();
	    }
	};
	   
    } //end init()
    
     
    /* 
     

         {
         "apiVersion": "2.1",
         "data": {
         "id": "VA770wpLX-Q",
         "uploaded": "2011-02-24T22:31:02.000Z",
         "updated": "2012-04-08T21:37:06.000Z",
         "uploader": "drdrevevo",
         "category": "Music",
         "title": "Dr. Dre - I Need A Doctor (Explicit) ft. Eminem, Skylar Grey",
         "description": "Music video by Dr. Dre performing I Need A Doctor featuring Eminem and Skylar Grey (Explicit). © 2011 Aftermath Records",
         "tags": ["Dr", "Dre", "Eminem", "New", "Song", "Skylar", "Grey", "GRAMMYs", "Dr.", "Need", "Doctor", "video", "Eazy", "N.W.A.", "NWA", "easy", "drdre", "and", "em"],
         "thumbnail": {
         "sqDefault": "http://i.ytimg.com/vi/VA770wpLX-Q/default.jpg",
         "hqDefault": "http://i.ytimg.com/vi/VA770wpLX-Q/hqdefault.jpg"
         },
         "player": {
         "default": "http://www.youtube.com/watch?v=VA770wpLX-Q&feature=youtube_gdata_player"
         },
         "content": {
         "5": "http://www.youtube.com/v/VA770wpLX-Q?version=3&f=videos&app=youtube_gdata"
         },
         "duration": 457,
         "aspectRatio": "widescreen",
         "rating": 4.902695,
         "likeCount": "430519",
         "ratingCount": 441253,
         "viewCount": 88270796,
         "favoriteCount": 306556,
         "commentCount": 270597,
         "status": {
         "value": "restricted",
         "reason": "requesterRegion"
         },
         "restrictions": [{
         "type": "country",
         "relationship": "deny",
         "countries": "DE"
         }],
         "accessControl": {
         "comment": "allowed",
         "commentVote": "allowed",
         "videoRespond": "allowed",
         "rate": "allowed",
         "embed": "allowed",
         "list": "allowed",
         "autoPlay": "denied",
         "syndicate": "allowed"
         }
         }
         }

 $(function() {
var availableTags = [
"ActionScript",
"AppleScript",
"Asp",
"BASIC",
"C",
"C++",
"Clojure",
"COBOL",
"ColdFusion",
"Erlang",
"Fortran",
"Groovy",
"Haskell",
"Java",
"JavaScript",
"Lisp",
"Perl",
"PHP",
"Python",
"Ruby",
"Scala",
"Scheme"
];
$( "#srch" ).autocomplete({
source: availableTags
});
});


         */
        
       
   