import CardComponent from "../../Cards/Card/Card";

import styles from "./VaccineCards.module.css";

import { Box, Typography, Grid } from "@material-ui/core";

const VaccineCards = (props) => {
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Canada Vaccination Rates
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.recoveries}
          cardTitle="Total Recoveries"
          value={props.totalRecoveries}
          lastUpdate={props.last_updated}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.vaccinations}
          cardTitle="Total Recoveries"
          value={props.totalRecoveries}
          lastUpdate={props.last_updated}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.todayVaccinations}
          cardTitle="Total Recoveries"
          value={props.totalRecoveries}
          lastUpdate={props.last_updated}
          cardSubtitle="Number of active cases from COVID-19."
        />
      </Grid>
    </div>
  );
};

export default VaccineCards;
