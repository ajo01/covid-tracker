import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const vaccineUrl = 'https://api.covid19tracker.ca/summary'

export const fetchData = async (country) => {
    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData

    } catch(e) {
        console.log(e)
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate  
        }))

        return modifiedData

    } catch(e) {
        console.log(e)
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name)

    } catch(e) {
        console.log(e)
    }
}

export const fetchVaccineData = async () => {
    try {
        const {data: {data, last_updated}} = await axios.get(vaccineUrl)
        const modifiedData = {
            totalRecoveries: data[0].total_recoveries,
            totalVaccinations: data[0].total_vaccinations,
            vaccinatedToday: data[0].total_vaccinated,
            last_updated
        }
        return modifiedData

    } catch(e) {
        console.log(e)
    }
}