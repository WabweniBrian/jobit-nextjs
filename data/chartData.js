export const barChartData = [
  {
    name: "Total applications",
    data: [44, 55, 57, 56, 61, 58, 63],
  },
  {
    name: "Number of jobs",
    data: [76, 85, 101, 98, 87, 105, 91],
  },
];

export const barChartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#0bab7c", "#e6c000"],
  yaxis: {
    title: {
      text: "Applications",
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};
