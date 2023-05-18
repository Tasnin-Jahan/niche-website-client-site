import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bicycle-shop-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            });
    }, [])
    return (
        <Box style={{ marginBottom: '70px' }} sx={{ width: '100%' }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'rgb(77, 69, 124)' }} variant="h4" component="div">
                    Reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => <Review
                            key={review.name}
                            review={review}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;