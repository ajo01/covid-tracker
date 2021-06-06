import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchVaccineData } from '../../api'


const VaccineChart =  () => {
    const [vaccineData, setVaccineData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const initialVaccineData = await fetchVaccineData()
            setVaccineData(initialVaccineData);
        }
        fetchAPI()
    }, [])

    console.log(vaccineData)


    return (
        <div>Chart</div>
    )
}

export default VaccineChart