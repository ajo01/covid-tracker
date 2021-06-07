import { Button, ThemeProvider, Box } from "@material-ui/core";
import theme from "../../UI/theme";
import VaccineChart from "./VaccineChart";
import { Link } from "react-router-dom";
import React from "react";

const Vaccine = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box mt={5}>
          <Link to="/">
            <Button variant="contained" color="primary">
              Check Global Covid Cases
            </Button>
          </Link>
        </Box>
      </ThemeProvider>
      <VaccineChart />
    </React.Fragment>
  );
};

export default Vaccine;
