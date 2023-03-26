import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { barChartData, barChartOptions } from "../../data/chartData";
import { useEffect, useState } from "react";

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(barChartData);
  }, []);

  return (
    <div className="p-2 rounded-lg card">
      <h1 className="text-xl font-bold">Listing Performance</h1>
      <Chart
        options={barChartOptions}
        series={data}
        type="bar"
        width="100%"
        height="250"
      />
    </div>
  );
};

export default BarChart;
