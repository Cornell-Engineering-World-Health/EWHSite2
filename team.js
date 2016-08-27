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

  $.getJSON("alumni.json", function(data) {
    var alum_template = $('#alumni-template').html();
    var alum_html = Mustache.render(alum_template, data);
    $('#alumni-scroll').append(alum_html);
  });
});
