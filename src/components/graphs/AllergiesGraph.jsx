import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AllergiesGraph = () => {
  // Data for the bar graph
  const data = {
    labels: ["Pollen", "Dust", "Mold", "Pet Dander", "Peanuts"],
    datasets: [
      {
        label: "Number of People Affected",
        data: [120, 80, 50, 40, 60], // Example data
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Allergies Affecting People",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Number of People",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="allergies">
      <Bar data={data} options={options} />
    </div>
  );
};

export default AllergiesGraph;
