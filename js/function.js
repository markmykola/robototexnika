$(function(){
    var doc_h = $(window).height();
    
        $(window).scroll(function(){  
         if ($(window).scrollDown() > doc_h/2)
         {
             $('#fixed').css('display', 'block');            
         }
         else{
             $('#fixed').css('display', 'none');
             };
       } ); 
       
    $('#fixed').click(function(){
        $(window).scrollDown(0);
 });                
 });