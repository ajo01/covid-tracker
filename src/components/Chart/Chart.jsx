import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData()
            setDailyData(initialDailyData);
        }
        fetchAPI()
    }, [])

    const lineChart = (
        dailyData.length ?
            (<Line data={{
                labels: dailyData.map(({date})=> date),
                datasets:[{
                    data: dailyData.map(({ confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#e07a5f',
                    backgroundColor: 'rgba(255, 127, 104, 0.3)',
                    fill:true
                }, {
                    data: dailyData.map(({ deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: '#3d405',
                    backgroundColor: 'rgba(129, 104, 255, 0.5)',
                    fill:true
                }]
            }} /> ) : null
    )

    console.log(confirmed, recovered, deaths)

    const barChart = (
        confirmed
        ? (
            <Bar data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        '#e07a5f',
                        '#81b29a',
                        '#3d405b' 
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }} 
            options={{
                legend: {display: false},
                title: {display:true, text:`Current state in ${country}`}
            }}/>
        ) : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart