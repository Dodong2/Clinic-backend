import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const GenderGraph = () => {
  // Data for the doughnut graph
  const data = {
    labels: ["Male", "Female"], // Categories
    datasets: [
      {
        data: [60, 40], // Example data (60% male, 40% female)
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)", // Blue for Male
          "rgba(255, 99, 132, 0.6)", // Red for Female
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the doughnut graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Gender Distribution",
        align: "center",
      },
    },
  };

  return (
    <div className="gender">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GenderGraph;
