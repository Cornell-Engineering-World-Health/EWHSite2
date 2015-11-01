$.getJSON("members.json", function(data) {
  var template = $("#modal-template").html();
  var html = Mustache.render(template, data);
  $('#wrapper').append(html);
});