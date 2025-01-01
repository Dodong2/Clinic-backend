import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AgeGraph = () => {
  const [ageData, setAgeData] = useState([0, 0, 0, 0, 0]); // Default values for each age range

  useEffect(() => {
    const fetchAgeData = async () => {
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

        // Initialize age ranges
        const ageRanges = [0, 0, 0, 0, 0]; // Corresponds to [10-20, 21-30, 31-40, 41-50, 51-60]

        // Group ages into ranges
        allDocs.forEach((doc) => {
          const age = doc.age; // Assumes `age` is a field in your documents
          if (age >= 10 && age <= 20) ageRanges[0]++;
          else if (age >= 21 && age <= 30) ageRanges[1]++;
          else if (age >= 31 && age <= 40) ageRanges[2]++;
          else if (age >= 41 && age <= 50) ageRanges[3]++;
          else if (age >= 51 && age <= 60) ageRanges[4]++;
        });

        // Update state with processed data
        setAgeData(ageRanges);
      } catch (error) {
        console.error("Error fetching age data:", error);
      }
    };

    fetchAgeData();
  }, []); // Empty dependency array ensures it runs only once

  // Data for the Bar chart
  const data = {
    labels: ["10-20", "21-30", "31-40", "41-50", "51-60"], // Age groups
    datasets: [
      {
        label: "Number of People",
        data: ageData, // Dynamic data from Firestore
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
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

  return (
    <div className="age">
      <Bar data={data} options={options} />
    </div>
  );
};

export default AgeGraph;
