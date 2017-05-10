$(document).ready(function() {

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $('.nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
    event.preventDefault();
  });
  /* When user clicks a link */
  $('.header-nav li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');
  });

  /***************** Header BG Scroll ******************/
  function setHeaderStyles() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      $('section.navigation').addClass('fixed');
      $('header').css({
        "border-bottom": "none",
      });
    } else {
      $('section.navigation').removeClass('fixed');
      $('header').css({
        "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
      });
    }
  }

  $(window).scroll(setHeaderStyles);
  setHeaderStyles();
});
