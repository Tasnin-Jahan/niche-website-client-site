import React from 'react';
import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';

const Review = (props) => {
    const { name, img, description, rating } = props.review
    // const [value, setValue] = React.useState(2);

    return (
        <Grid item xs={6} sm={4} md={4}>
            {/* <Grid item xs={6}> */}
            <Card style={{ backgroundColor: 'beige', width: '300px', height: '500px', borderRadius: '10%' }} sx={{ boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: '300px', height: '250px', borderRadius: '10%', margin: '0 auto' }}
                    image={img}
                    alt="bicycle-image"
                />
                <CardContent>
                    <Typography variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Review;