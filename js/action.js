$(document).ready(function(){
    // var $nav = $('.header'),
    // $win = $(window),
    // winH = $win.height();    // Get the window height.
    // jQuery(function($) {

    //     if($(window).scrollTop()>=winH){
    //         $nav.addClass("classScroll");
    //     }
    
        
    //     else    
    //     $nav.removeClass("classScroll");

    //     $win.on("scroll", function () {
    //         if($(window).scrollTop()>=winH*0.8){
    //             $nav.addClass("classScroll");
    //         }
            
    //         else{
    //             $nav.removeClass("classScroll");
    //         }
    //     }).on("resize", function(){ // If the user resizes the window
    //     winH = $(this).height(); // you'll need the new height value
    //     });
    // });

        $(".icon").click(function(){
            $(".box-close").fadeToggle(function(){
            });     
            $(".box-item-mm").slideToggle(function(){
            });                       

        });
       

        

          $(".box-close").click(function(){
            //   $(".box-item-mm").css("display","none");
            $(".box-item-mm").slideUp();
            $(this).css("display","none");
          })
});