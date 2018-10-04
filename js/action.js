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
       

        // animation on scroll
        jQuery(function($) {
  
            // Function which adds the 'animated' class to any '.animatable' in view
            var doAnimations = function() {
              
              // Calc current offset and get all animatables
              var offset = $(window).scrollTop() + $(window).height(),
                  $animatables = $('.animatable');
              
              // Unbind scroll handler if we have no animatables
              if ($animatables.length == 0) {
                $(window).off('scroll', doAnimations);
              }
              
              // Check all animatables and animate them if necessary
                  $animatables.each(function(i) {
                 var $animatable = $(this);
                      if (($animatable.offset().top + $animatable.height() - 300) < offset) {
                  $animatable.removeClass('animatable').addClass('animated');
                      }
              });
          
              };
            
            // Hook doAnimations on scroll, and trigger a scroll
              $(window).on('scroll', doAnimations).on("resize", function(){ // If the user resizes the window
                $(window).height() = $(this).height(); // you'll need the new height value
                });
            $(window).trigger('scroll');
          
          });

          $(".box-close").click(function(){
            //   $(".box-item-mm").css("display","none");
            $(".box-item-mm").slideUp();
            $(this).css("display","none");
          })
});