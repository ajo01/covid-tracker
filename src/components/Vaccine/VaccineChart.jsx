import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchVaccineData } from "../../api";

import styles from './VaccineChart.module.css'

const VaccineChart = ({data: {totalRecoveries, totalVaccinations, vaccinatedToday}}) => {
  const [vaccineData, setVaccineData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialVaccineData = await fetchVaccineData();
      setVaccineData(initialVaccineData);
    };
    fetchAPI();
  }, []);

  console.log(vaccineData);

  const barChart = (
      totalRecoveries
      ? (
      <Bar data={{
        labels: ['Total Recoveries', 'Total Vaccinations', 'Total Vaccinated Today'],
        datasets: [{
            label: 'People',
            backgroundColor: [
                '#e07a5f',
                '#81b29a',
                '#3d405b' 
            ],
            data:[totalRecoveries, totalVaccinations, vaccinatedToday]
        }]
      }}
      options={{
        legend: {display: false},
        title: {display:true, text:`Current state in Canada`}
    }}
      >
      </Bar>) : null
  )

  return (
    <div className={styles.container}>
      {barChart}
    </div>
  );
};

export default VaccineChart;
