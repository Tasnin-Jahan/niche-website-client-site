import React from 'react';
import Grid from '@mui/material/Grid';
import bicycle from '../../../image/photo-1485965120184-e220f721d03e.jfif';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Grid style={{ backgroundColor: 'grey', marginTop: '20px' }} sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item style={{ ...verticalCenter }} xs={12} md={6}>
                <Box>
                    <Typography variant="h2">
                        Choose Your <br />
                        Bicycle!!
                    </Typography>
                    <Typography variant="h4" sx={{ my: 3, color: 'rgb(77, 69, 124)' }}>
                        All New Collecttions are Here!!Go and Grap Your One
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} style={{ ...verticalCenter }}  >
                <img style={{ width: '900px', height: '400px', paddingBottom: '20px', paddingTop: '4px' }} src={bicycle} alt="" />
            </Grid>

        </Grid>
    );
};

export default Banner;