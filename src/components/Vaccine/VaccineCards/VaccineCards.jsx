import CardComponent from "../../Cards/Card/Card";

import styles from "./VaccineCards.module.css";

import { Box, Typography, Grid } from "@material-ui/core";

const VaccineCards = ({
  data: {
    totalRecoveries,
    totalVaccinations,
    vaccinatedToday,
    totalInfected,
    last_updated,
  },
}) => {
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Canada Vaccination Rates
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.recoveries}
          cardTitle="Total Recoveries"
          value={totalRecoveries}
          lastUpdate={last_updated}
          cardSubtitle="Total Recoveries from COVID-19."
        />
        <CardComponent
          className={styles.totalInfected}
          cardTitle="Total Infected"
          value={totalInfected}
          lastUpdate={last_updated}
          cardSubtitle="Total Infected from COVID-19."
        />
        <CardComponent
          className={styles.todayVaccinations}
          cardTitle="Total Recoveries"
          value={vaccinatedToday}
          lastUpdate={last_updated}
          cardSubtitle="Total Vaccinations for COVID-19 today."
        />
        <CardComponent
          className={styles.vaccinations}
          cardTitle="Total Vaccinations"
          value={totalVaccinations}
          lastUpdate={last_updated}
          cardSubtitle="Total Vaccinations from COVID-19."
        />
      </Grid>
    </div>
  );
};

export default VaccineCards;
