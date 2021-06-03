import React from 'react'
import ReactDOM from 'react-dom'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
}

export default App