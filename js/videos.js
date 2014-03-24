$(".vid").on("click", function(e) {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked")
  }
  else {
    $(this).addClass("clicked")
  }
});
