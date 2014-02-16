$(".vid").on("click", function(e) {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked")
  }
  else {
    $(this).addClass("clicked")
  }
  // $(this).css({"display": "block", "height": $(this).children().height(), "width": $(this).children().width(), "border-radius": "0px", "padding": "30px"});
  // $(this).children().css({"display": "block"});
});
// $(".vid").on("dblclick", function(e) {
//   $(this).css({"display": "inline-block", "height": "200px", "width": "200px", "border-radius": "100px", "padding": 0})
//   $(this).children().css("display", "none");
// });
