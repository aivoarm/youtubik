// Globals------------------



var lessoncounter = 1;

var el={"DOCTYPE":"&lt;!DOCTYPE HTML&gt;",
    "ohtml":'&lt;html&gt;',
    "chtml":'&lt;/html&gt;',
    "ohead":"&lt;head&gt;",
    "chead":'&lt;/head&gt;',
    "obody":'&lt;body&gt;',
    "cbody":'&lt;/body&gt;',
    'op':'&lt;p&gt;',
    'cp':'&lt;/p&gt;',
    'otitle':'&lt;title&gt;',
    'ctitle':'&lt;/title&gt;',

    begin:function(str){
        return el.DOCTYPE+el.ohtml +el.ohead +el.otitle +str+el.ctitle+el.chead
    },

    body:function(chld,str){
        var ochld = '&lt;'+chld+ '&gt;' ;
        var cchld = '&lt;/'+chld+ '&gt;';
        return el.obody+ ochld +str+cchld + el.cbody;
    },
    p:function(str){
        return el.op +str+el.cp
    },
    htmlstr:function(str){
        return  '&lt;'+str+ '&gt;';
    }
}

$('.cardPile').hide();

//start init --------------------------------

$(init);

function init() {
    hidemsg();



    //$( "<p>Test</p>" ).appendTo($('body'));



    switch(lessoncounter){
        case 1:
            lesson1();
            break;
        case 2:
            lesson2();
            break;
        case 3:
            lesson3();
            break;

        //---------- Lesson4------  //---------- //---------- //---------- //---------- //----------
        case 4:

            $('.cardPile')
                .removeClass()
                .html( '<p>  More to come</p>')
                .addClass('cardPile l'+lessoncounter)
                .css('height','200px');

            break;
        //---------- Lesson5------  //---------- //---------- //---------- //---------- //----------
        case 5:

            $('.cardPile')
                .removeClass()
                .html( '<p>  More to come</p>')
                .addClass('cardPile l'+lessoncounter)
                .css('height','200px');

            break;
        //---------- Lesson6------  //---------- //---------- //---------- //---------- //----------
        case 6:

            $('.cardPile')
                .removeClass()
                .html( '<p>  More to come</p>')
                .addClass('cardPile l'+lessoncounter)
                .css('height','200px');

            break;


    }








}



//functions-------------------------------

function prechallenge(){
    if(lessoncounter > 1){
        lessoncounter--;
    }
    CKEDITOR.instances.editor.setData('script goes here');
    init();

    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);
}

function nextchallenge(){
    lessoncounter++;
    CKEDITOR.instances.editor.setData('script goes here');

    init();

    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);
}

function submitCode() {
    // event.preventDefault();
    $('#out').text('');

    var editor2 = CKEDITOR.instances.editor;

    var html = editor2.getData();

    $(html).appendTo('#out');

}



function gotoLab(){
    $('#out').text('');
    //event.preventDefault();
    //put here function to edit content == OnAfterLinkedFieldUpdate
    var editor2 = CKEDITOR.instances.editor;

    var html = editor2.getData();
    //alert(html) ;
    $(html).appendTo('#out');

    $('#successMessage').hide();
    $('#successMessage').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });

    $('html, body').animate({
        scrollTop: $("#CKform").offset().top
    }, 2000);

}


function hidemsg(){
    $('#successMessage').hide();
    $('#successMessage').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });


    $('#warning').hide();
    $('#warning').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });

}

function showsuccessmessage(){

    $('#successMessage').show();
    $('#successMessage').animate( {
        left: '380px',
        top: '200px',
        width: '400px',
        height: '200px',
        opacity: 1
    } );
}


function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}




//---------------////---------------////---------------////---------------////---------------////---------------////---------------//
//------LESSONS-----------//------LESSONS-----------//------LESSONS-----------//------LESSONS-----------//------LESSONS-----------
//---------------////---------------////---------------////---------------////---------------////---------------////---------------//


function lesson1(){

    var correctCards = 0;
    var orderCounter = 0;



    $('.cardPile').show();
    var answer='';
    var tags =[];
    var result =[];




    $('.cardPile')
        .removeClass()
        .addClass('cardPile l'+lessoncounter)
        .html( '<p>  Click to move into the canvas in correct order</p>' )
        .css('height','200px') ;


    // Create a data for lesson1
    tags = [
        el.DOCTYPE,
        el.ohtml,
        el.ohead,
        el.htmlstr('Some head stuff'),
        el.chead,
        el.obody,
        el.op,
        'Hello first webpage',
        el.cp,
        el.cbody,
        el.chtml
    ];


    for ( var i=0; i < tags.length; i++ ) {
        result[i] = tags[i];
    }

    orderCounter= result.length;
    //alert(result[0]);


    // generate random
    tags.sort( function() { return Math.random() - .5 } );


    for ( var i=0; i < tags.length; i++ ) {
        $('<div>' + tags[i] + '</div>')
            .data( 'tag', tags[i] )
            .attr( 'id', 'card'+ tags[i] )
            .attr( 'class', 'lesson1' )
            .css("background-color",get_random_color())
            .appendTo( '.l'+lessoncounter )

    }

    index=0;


    $('.l'+lessoncounter+' div').click(function() {

        if($(this).html()==result[index]) {

            answer += $(this).text() +'\n';

            $( this).animate({
                opacity: 0.25,
                bottom: "-=100",
                height: "toggle"
            }, 1000, function() {
                CKEDITOR.instances.editor.setData(answer);
            });


            index++;
            correctCards++;


            if ( correctCards == orderCounter) {
                showsuccessmessage();
                CKEDITOR.instances.editor.setData(answer);
            }


        } else{
            $('#warning').show();
            $('#warning').animate( {
                left: '380px',
                top: '200px',
                width: '300px',
                height: '100px',
                opacity: 1
            } );

            setTimeout(function() {
                $('#warning').hide()
                readyforHovering = true;
            }, 2000)
        }

    });

}

///=======Lesson2=====================


function lesson2(){

    var correctCards = 0;
    var orderCounter = 0;



    $('.cardPile').show();
    var answer='';
    var tags =[];
    var result =[];




    $('.cardPile')
        .removeClass()
        .addClass('cardPile l'+lessoncounter)
        .html( '<p>  Choose correct Tags in correct order</p>' )
        .css('height','400px') ;


    // Create a data for lesson1
    tags = [
        el.DOCTYPE,
        el.ohtml,
        el.ohead,
        el.htmlstr('Some head stuff'),
        el.chead,
        el.obody,
        el.op,
        'Hello first webpage',
        el.cp,
        el.cbody,
        el.chtml,
        el.DOCTYPE,
        el.ohtml,
        el.ohead,
        el.htmlstr('Some head stuff'),
        el.chead,
        el.obody,
        el.op,
        'Hello first webpage',
        el.cp,
        el.cbody,
        el.chtml,
        el.DOCTYPE,
        el.ohtml,
        el.ohead,
        el.htmlstr('Some head stuff'),
        el.chead,
        el.obody,
        el.op,
        'Hello first webpage',
        el.cp,
        el.cbody,
        el.chtml
    ];


    for ( var i=0; i < tags.length; i++ ) {
        result[i] = tags[i];
    }

    orderCounter= result.length;
    //alert(result[0]);


    // generate random
    tags.sort( function() { return Math.random() - .5 } );


    for ( var i=0; i < tags.length; i++ ) {
        $('<div>' + tags[i] + '</div>')
            .data( 'tag', tags[i] )
            .attr( 'id', 'card'+ tags[i] )
            .attr( 'class', 'lesson1' )
            .css("background-color",get_random_color())
            .appendTo( '.l'+lessoncounter )

    }

    index=0;


    $('.l'+lessoncounter+' div').click(function() {

        if($(this).html()==result[index]) {

            answer += $(this).text() +'\n';

            $( this).animate({
                opacity: 0.25,
                bottom: "-=100",
                height: "toggle"
            }, 1000, function() {
                CKEDITOR.instances.editor.setData(answer);
            });


            index++;
            correctCards++;


            if ( correctCards == 11 ) {
                showsuccessmessage();
                CKEDITOR.instances.editor.setData(answer);
            }


        } else{
            $('#warning').show();
            $('#warning').animate( {
                left: '380px',
                top: '200px',
                width: '300px',
                height: '100px',
                opacity: 1
            } );

            setTimeout(function() {
                $('#warning').hide()
                readyforHovering = true;
            }, 2000)
        }

    });

}

//=======Lesson3=====================

function lesson3(){

    var correctCards = 0;

    $('.cardPile')
        .removeClass()
        .html( '<p>  Click on the right HTML tree</p>')
        .addClass('cardPile l'+lessoncounter)
        .css('height','520px');


    //generating  data
    var diagram2 = '<img src="http://yuml.me/diagram/scruffy/class/' +
        '[HTML{bg:orange}]->[HEAD{bg:orange}], ' +
        '[HTML{bg:orange}]->[BODY{bg:green}], ' +
        '[HEAD{bg:orange}]->[TITLE{bg:blue}], ' +
        '[TITLE{bg:orange}]->[My website], ' +
        '[BODY{bg:green}]->[H1{bg:yellow}], ' +
        '[BODY{bg:green}]->[P{bg:yellow}], ' +
        '[P{bg:yellow}]-[Hello world], ' +
        '[H1{bg:yellow}]-[My heading]" ' +
        '>'

    var diagram1 = '<img src="http://yuml.me/diagram/scruffy/class/' +
        '[HTML{bg:orange}]->[HEAD{bg:orange}], ' +
        '[BODY{bg:green}]->[H1{bg:yellow}], ' +
        '[H1{bg:green}]->[P{bg:yellow}], ' +
        '[HEAD{bg:orange}]->[BODY{bg:green}], ' +
        '[HEAD{bg:orange}]->[TITLE{bg:blue}], ' +
        '[TITLE{bg:orange}]->[My website], ' +
        '[P{bg:yellow}]-[Hello world], ' +
        '[H1{bg:yellow}]-[My heading]" ' +
        '>'

    $('<div>' + diagram1)
        .attr('id','wrong')
        .appendTo( '.l'+lessoncounter );

    $('<div>' + diagram2)
        .attr('id','right')
        .appendTo( '.l'+lessoncounter ) ;



    //action
    var index=0;
    var correctCards=0;
    $(".l"+lessoncounter+" div").click(function() {

        answer ="<html>\n<head>\n\t<title>My website</title>\n</head>\n<body>\n\t<h1>My heading</h1>\n\t<p>Hello world</p>\n</body>\n</html>" ;


        if($(this).attr('id')=='right') {

            $( this).animate({
                opacity: 0.25,
                bottom: "-=100",
                height: "toggle"
            }, 1000, function() {
                CKEDITOR.instances.editor.setData(answer);
            });

            // $(this).hide();
            index++;
            correctCards++;

            showsuccessmessage();
            CKEDITOR.instances.editor.setData(answer);

        } else{
            $('#warning').show()
                .animate( {
                    left: '380px',
                    top: '200px',
                    width: '300px',
                    height: '100px',
                    opacity: 1
                } );

            setTimeout(function() {
                //Code to hide the large image and show the smaller image goes here
                $('#warning').hide()
                //Now enable hovering...
                readyforHovering = true;
            }, 2000)

        }

    });

}

//=======Lesson4=====================


//=======Lesson5=====================


//=======Lesson6=====================