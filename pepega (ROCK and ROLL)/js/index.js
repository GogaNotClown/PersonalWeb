function fontResize() {
  var resolution = 1440;
  var font = 10;

  var width = $(window).width();

  var newFont = font * (width / resolution);
  $("html").css("font-size", newFont);
}

$(document).ready(function() {
  fontResize();
  $(window).bind("resize", function() {
    fontResize();
  });
});
