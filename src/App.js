import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { Typography, Button, ThemeProvider, Box } from "@material-ui/core";
import theme from "./UI/theme";
import Vaccine from "./components/Vaccine/Vaccine";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    data: {},
    countries: "",
    primaryModeOn: true,
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Box mt={5}>
          <Typography variant="h2">World Covid Tracker</Typography>
        </Box>
        <Router>
          <Switch>
            <Route exact path="/">
              <ThemeProvider theme={theme}>
                <Box mt={5}>
                  <Link to="/vaccine">
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Check Canada Vaccination Rates
                    </Button>
                  </Link>
                </Box>
              </ThemeProvider>
              <Cards data={data} />
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              <Chart data={data} country={country} />
            </Route>

            <Route path="/vaccine">
              <Vaccine />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
