import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import { Typography, Button, ThemeProvider, Box } from '@material-ui/core'
import theme from './UI/theme'

class App extends React.Component {
    state = {
        data: {},
        countries: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)

        this.setState({ data: fetchedData, country: country })
    }


    render() {
        const { data, country } = this.state

        return (
            <div className={styles.container}>
                <Typography variant="h2">World Covid Tracker</Typography>
                <ThemeProvider theme={theme}>
                    <Box mt={5}>
                    <Button variant="contained" color="primary">Check Canada Vaccination Rates</Button>
                    </Box>
                </ThemeProvider>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App