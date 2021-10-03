(function ($) {
  $(document).ready(function () {
    var xValues = [
      "Gốc cần trả 1.680.000.000đ",
      "Trả trước 720,000,000đ",

      "Lãi cần trả 448,350,000đ",
    ];
    var yValues = [51, 30, 19];
    var barColors = ["#00c199", "#4371fb", "#ffcb32"];

    new Chart("myChart", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },

      options: {
        responsive: true,
        cutout: 130,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
      },
    });

    new Chart("myChart2", {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },

      options: {
        responsive: true,
        cutout: 130,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
      },
    });
  });
})(jQuery);
