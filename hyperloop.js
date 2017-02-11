/* This script will create a looping page effect by scrolling back to the top when
   the bottom is reached and initialize wow.js to reset page animations.
   this effect works most smoothly when the top matches the bottom of your page. */

$('document').ready(function() {
    $(document).scroll(function(){
      if (document.documentElement.clientHeight + $(window).scrollTop() >= $(document).height()) {
        $(document).scrollTop(0) && new WOW().init();;
        
      }
    });
  });
