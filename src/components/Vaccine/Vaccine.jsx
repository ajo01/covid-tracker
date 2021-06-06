import { Button, ThemeProvider, Box } from "@material-ui/core";
import theme from "../../UI/theme";
import VaccineChart from "./VaccineChart";
import { Link } from "react-router-dom";

const Vaccine = () => {
  return (
    <div>
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
    </div>
  );
};

export default Vaccine;
