$(".vid").on("click", function(e) {
  $(this).toggleClass("clicked")
  $(".vid").toggleClass("hidden")
  $(this).children().first().toggleClass("hidden")
});
