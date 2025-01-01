import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
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
  const [genderData, setGenderData] = useState([0, 0]); // Default male: 0, female: 0

  useEffect(() => {
    const fetchGenderData = async () => {
      try {
        // Reference both collections
        const listsRef = collection(db, "lists");
        const employeeRef = collection(db, "employee");

        // Get documents from both collections
        const listsSnapshot = await getDocs(listsRef);
        const employeeSnapshot = await getDocs(employeeRef);

        // Combine all documents
        const allDocs = [
          ...listsSnapshot.docs.map((doc) => doc.data()),
          ...employeeSnapshot.docs.map((doc) => doc.data()),
        ];

        // Count Male and Female
        const maleCount = allDocs.filter((doc) => doc.sex === "Male").length;
        const femaleCount = allDocs.filter((doc) => doc.sex === "Female").length;

        // Update the state
        setGenderData([maleCount, femaleCount]);
      } catch (error) {
        console.error("Error fetching gender data:", error);
      }
    };

    fetchGenderData();
  }, []); // Empty dependency array to run only on component mount

  // Data for the doughnut graph
  const data = {
    labels: ["Male", "Female"], // Categories
    datasets: [
      {
        data: genderData, // Dynamic data from Firestore
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
