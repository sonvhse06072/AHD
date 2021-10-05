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
    if ($(".carousel-2-item").length > 0) {
      $(".carousel-2-item").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        responsive: [
          {
            breakpoint: 992,
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

    $("body").on("click", "#header-search-btn", function () {
      $("#hide-on-search").removeClass("d-md-flex");
      $("#search-bar").removeClass("d-none");
    });

    $("body").on("click", "#exit-search", function () {
      $("#hide-on-search").addClass("d-md-flex");
      $("#search-bar").addClass("d-none");
    });
  });
})(jQuery);
