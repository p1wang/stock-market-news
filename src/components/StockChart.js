import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function StockChart({ stockChartData, slug }) {
  const stockTimeStamp = [];
  const stockPrice = [];

  const data = {
    labels: stockTimeStamp,
    datasets: [
      {
        fill: true,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
        borderColor: "rgb(53, 162, 235)",
        data: stockPrice,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js",
        font: {
          size: 24,
          style: "italic",
        },
      },
      legend: { display: false },
    },
  };

  const processChartData = (data) => {
    for (const [key, value] of Object.entries(data)) {
      stockPrice.push(value.open);
      stockTimeStamp.push(key.substr(0, 10));
    }
  };

  processChartData(stockChartData);
  stockTimeStamp.sort();

  options.plugins.title.text = slug.toUpperCase();

  return <Line options={options} data={data} />;
}

export default StockChart;
