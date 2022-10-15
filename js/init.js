$.fn.nextOrFirst = function(selector) {
  var next = this.next(selector);
  return (next.length) ? next : this.prevAll(selector).last();
}

$(document).ready(function () {

  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("active");
    $(".nav-menu").toggleClass("active");
  });


  $(".slideshow .slide:eq(0)").addClass("active");
  $(".slideshow .slide:gt(0)").hide();

  var duration = 1000;
  setInterval(function () {
    $(".slideshow .slide.active:eq(0)").delay(duration).fadeOut(duration).removeClass("active").nextOrFirst('.slide').addClass("active").fadeIn(duration).end();

  }, 15000);

  $(".accordion li .item-header").on("click", function () {
    parent = $(this).parent();
    elem = $(".item-content", parent);
    if (!parent.hasClass("active")) {
      $(parent).addClass("active");
      $(elem).fadeIn();
    } else {
      $(parent).removeClass("active");
    }
  });
});