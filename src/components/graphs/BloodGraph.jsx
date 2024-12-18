import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const BloodGraph = () => {
  // Data for the pie chart
  const data = {
    labels: ["Type O", "Type A", "Type B", "Type AB"], // Blood type categories
    datasets: [
      {
        data: [40, 30, 20, 10], // Example data (percentages)
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red for Type O
          "rgba(54, 162, 235, 0.6)", // Blue for Type A
          "rgba(75, 192, 192, 0.6)", // Green for Type B
          "rgba(153, 102, 255, 0.6)", // Purple for Type AB
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Blood Type Distribution",
      },
    },
  };

  return (
    <div className="blood">
      <Pie data={data} options={options} />
    </div>
  );
};

export default BloodGraph;
