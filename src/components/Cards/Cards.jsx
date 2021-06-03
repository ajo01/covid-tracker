import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={4}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active Number of Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={3}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Real Date</Typography>
                        <Typography variant="body2">Number of Recoviers</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Real Date</Typography>
                        <Typography variant="body2">Number of Deaths from covid</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards