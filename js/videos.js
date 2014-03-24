$(".vid").on("click", function(e) {
  $(this).toggleClass("clicked")
  $(".vid").toggleClass("hidden")
  $(this).children(".title").toggleClass("hidden")
  src = $(this).children("iframe").attr("src")
  $(this).children("iframe").attr("src", src)
});
