import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const BloodGraph = () => {
  const [bloodData, setBloodData] = useState([0, 0, 0, 0]); // Default counts for each blood type

  useEffect(() => {
    const fetchBloodData = async () => {
      try {
        // Reference to the employee collection
        const employeeRef = collection(db, "employee");

        // Get all documents from the employee collection
        const employeeSnapshot = await getDocs(employeeRef);

        // Initialize blood type counts
        const bloodCounts = {
          O: 0,
          A: 0,
          B: 0,
          AB: 0,
        };

        // Count each blood type
        employeeSnapshot.docs.forEach((doc) => {
          const bloodType = doc.data().blood_type; // Assumes `blood_type` field exists
          if (bloodCounts[bloodType] !== undefined) {
            bloodCounts[bloodType]++;
          }
        });

        // Update state with blood type counts
        setBloodData([bloodCounts.O, bloodCounts.A, bloodCounts.B, bloodCounts.AB]);
      } catch (error) {
        console.error("Error fetching blood data:", error);
      }
    };

    fetchBloodData();
  }, []); // Empty dependency array ensures it runs only once

  // Data for the pie chart
  const data = {
    labels: ["Type O", "Type A", "Type B", "Type AB"], // Blood type categories
    datasets: [
      {
        data: bloodData, // Dynamic data from Firestore
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
