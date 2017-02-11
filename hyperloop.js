/* This script will create a looping page effect by scrolling back to the top when
   the bottom is reached and initialize wow.js to reset page animations.*/

$('document').ready(function() {
    $(document).scroll(function(){
      if (document.documentElement.clientHeight + $(window).scrollTop() >= $(document).height()) {
        $(document).scrollTop(0) && new WOW().init();;
        
      }
    });
  });
