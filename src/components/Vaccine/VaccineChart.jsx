import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchVaccineData } from "../../api";

import styles from "./VaccineChart.module.css";

const VaccineChart = ({
  data: { totalRecoveries, totalVaccinations, vaccinatedToday, totalInfected },
}) => {
  const [vaccineData, setVaccineData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialVaccineData = await fetchVaccineData();
      setVaccineData(initialVaccineData);
    };
    fetchAPI();
  }, []);

  console.log(vaccineData);

  const barChart = totalRecoveries ? (
    <Bar
      data={{
        labels: [
          "Total Recoveries",
          "Total Infected",
          "Total Vaccinated Today",
          "Total Vaccinations",
        ],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#81b29a", "#e07a5f", "#F2CC8F", "#3d405b"],
            data: [
              totalRecoveries,
              totalInfected,
              vaccinatedToday,
              totalVaccinations,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in Canada` },
      }}
    ></Bar>
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
};

export default VaccineChart;
