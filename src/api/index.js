import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const vaccineUrl = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'

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
        var vaccineData = JSON.parse(vaccineUrl)
        for (var i = 0; i < vaccineData.length; i++) {
            var recentData = vaccineData.data[vaccineData.data.length];
            console.log(recentData);
        }

    } catch(e) {
        console.log(e)
    }
}