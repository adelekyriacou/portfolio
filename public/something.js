function addActiveToNavbarWhenScrolling () {
  if($(window).scrollTop() > 50) {
     $("#navbar").addClass("active");
  } else {
     $("#navbar").removeClass("active");
  }
}

$(function() {
    addActiveToNavbarWhenScrolling()

    $(window).on("scroll", function() {
        addActiveToNavbarWhenScrolling()
    });
});
