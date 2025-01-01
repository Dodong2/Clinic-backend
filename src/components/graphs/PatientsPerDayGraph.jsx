import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
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

const PatientsPerDayGraph = () => {
  const [patientsCount, setPatientsCount] = useState([]);
  
  useEffect(() => {
    const fetchPatientsPerDay = async () => {
      try {
        // Query to get documents from both collections (lists and employee)
        const listsRef = collection(db, "lists");
        const employeeRef = collection(db, "employee");

        // Combine both collections into one query
        const combinedQuery = query(
          listsRef, 
          orderBy("createdAt", "asc")
        );

        const employeeQuery = query(
          employeeRef, 
          orderBy("createdAt", "asc")
        );

        const fetchCollection = async (queryRef) => {
          const querySnapshot = await getDocs(queryRef);
          return querySnapshot.docs.map(doc => doc.data().createdAt.toDate().toLocaleDateString());
        };

        // Get the lists and employee data
        const listsData = await fetchCollection(combinedQuery);
        const employeeData = await fetchCollection(employeeQuery);

        // Combine the two arrays and count occurrences per day
        const combinedData = [...listsData, ...employeeData];
        
        const dayCount = combinedData.reduce((acc, date) => {
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        // Convert the object to an array of date and count pairs
        const labels = Object.keys(dayCount);
        const data = Object.values(dayCount);

        // Set the data for the chart
        setPatientsCount({ labels, data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPatientsPerDay();
  }, []);

  // Data for the bar graph
  const data = {
    labels: patientsCount.labels || [], // Days of the week or any date
    datasets: [
      {
        label: "Number of Patients",
        data: patientsCount.data || [], // Number of patients per day
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color
        borderColor: "rgba(54, 162, 235, 1)",
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
        text: "Patients per Day",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Number of Patients",
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

export default PatientsPerDayGraph;
