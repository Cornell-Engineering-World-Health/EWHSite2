$(document).ready(function() {
  var changeNav = $('#middle').offset().top;
  $navbar = $('.navbar.navbar-default.navbar-fixed-top')
  $(document).scroll(function() {
    if($(window).scrollTop() >= changeNav) {
      $navbar.css('background-color', "#84939A");
      $navbar.css('padding', "1% 1% 1% 1%");
      $('.nav.navbar-nav li a').css('font-weight', "300");
    }
    else {
      $navbar.css('background-color', 'transparent');
      $navbar.css('padding', "2% 1% 0px 0px");
      $('.nav.navbar-nav li a').css('font-weight', "700");
    }
  });
  
});