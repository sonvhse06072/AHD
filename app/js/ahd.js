(function ($) {
  $(document).ready(function () {
    $("body").on("keyup", "#front-search-input", function (e) {
      if (!this.value) {
        $(".suggestion").removeClass("show");
      } else {
        $(".suggestion").addClass("show");
      }
    });
    if ($(".carousel").length > 0) {
      $(".carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    $(".input-file").click(function () {
      $("#ultilities-file-input").click();
    });
  });
})(jQuery);
