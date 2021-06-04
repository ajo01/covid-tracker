
import { Typography, Button, ThemeProvider, Box } from '@material-ui/core'
import theme from '../UI/theme'

const Vaccine = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box mt={5}>
                    <Button variant="contained" color="primary">Check Global Covid Cases</Button>
                </Box>
            </ThemeProvider>

        </div>
    )
}

export default Vaccine