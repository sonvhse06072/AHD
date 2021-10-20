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
    $("body").on("click", "#show-sidebar", function (e) {
      $(e.target).toggleClass("fa-bars fa-close");
      $(".nav-mobile").toggleClass("show");
    });
    $("body").on("click", ".show-sub-menu", function (e) {
      console.log(e.target);
      $(e.target).closest(".nav-item").children(".nav-sub").toggleClass("show");
    });
    $("body").on("change", "#file-upload-multiple", function (e) {
      console.log($(e.target).prop("files")[0]);
      var output = $('.file-list');
      var children = "";
      for (var i = 0; i < $(e.target).prop("files").length; ++i) {
        children += '<div class="d-flex align-items-center col-auto"><i class="far fa-file-pdf me-2 h2 mb-0"></i>' + $(e.target).prop("files")[i].name + '<i class="fas fa-times h2 ms-2 text-ahd-red mb-0"></i></div>';
      }
      $(output).html('<div class="row gy-3">'+children+'</div>');
    });
    $("body").on("click", ".upload-btn", function (e) {
      $('#file-upload-multiple').click();
    });
  });
})(jQuery);
