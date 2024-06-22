import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from "@mui/material"
import cities from "../data.json"

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11, 
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9, 
                    }
                }
            ]
        }
    }
})

const TourCard = (tour) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={3}>
                <img 
                    src={tour.image}
                    alt='Tour'
                    className='img'
                    style={{ width: '100%' }}
                />
                <Box paddingX={1} paddingY={1}>
                    <Typography variant="h6" component="h2">
                        {tour.name}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 1
                        }}
                    >
                        <AccessTime sx={{ width: 16, height: 16, marginRight: 0.5 }} />
                        <Typography variant='body2' component="p">
                            {tour.duration}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 3
                        }}
                    >
                        <Rating
                            name="read-only"
                            value={tour.rating}
                            readOnly
                            precision={0.5}
                            size="small"
                        />
                        <Typography variant='body2' component="p" marginLeft={0.5}>
                            {tour.rating}
                        </Typography>
                        <Typography variant='body3' component="p" marginLeft={1}>
                            ({tour.numberOfRewviews} reviews)
                        </Typography>
                    </Box>
                    <Box >
                        <Typography variant='h6' component="h3">
                            From C {tour.price}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider>  
        </Grid>
    );
}

export default TourCard;
