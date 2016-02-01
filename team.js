$(document).ready(function() {
  $('.team-scroll').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $.getJSON("members.json", function(data) {
    var template = $("#modal-template").html();
    var html = Mustache.render(template, data);
    $('#wrapper').append(html);
  });
});