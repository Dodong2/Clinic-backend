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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AgeGraph = () => {
  const data = {
    labels: ["10-20", "21-30", "31-40", "41-50", "51-60"],
    datasets: [
      {
        label: "Number of People",
        data: [5, 12, 8, 6, 4], // Sample age group data
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Age Distribution",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Age Groups",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of People",
        },
        beginAtZero: true,
      },
    },
  };

  return(
    <div className='age'>
    <Bar data={data} options={options} />
    </div>
  ) 
};

export default AgeGraph;
