import {
  Button,
  ThemeProvider,
  Box
} from "@material-ui/core";
import theme from "../../UI/theme";
import VaccineChart from "./VaccineChart";
import { Link } from "react-router-dom";
import React from "react";

import VaccineCards from "./VaccineCards/VaccineCards";


const Vaccine = (props) => {
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

        <VaccineCards data={props.data}/>

      <VaccineChart data={props.data} />
    </React.Fragment>
  );
};

export default Vaccine;
