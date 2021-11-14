import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MoreProduct = (props) => {
    const { _id, name, img, description, price } = props.moreProduct
    return (
        // <Grid item xs={6} sm={4} md={4}>
        <Grid item xs={6}>
            <Card style={{ backgroundColor: 'rgb(229, 200, 247)' }} className="product-container" sx={{ boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: '500px', height: '350px', margin: '0 auto' }}
                    image={img}
                    alt="bicycle-image"
                />
                <CardContent>
                    <Typography variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 100)}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {price} TK
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to={`/productDetail/${_id}`}><Button variant="contained" style={{ backgroundColor: 'rgb(34, 3, 34)', marginTop: '10px' }}>BUY NOW</Button></Link>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MoreProduct;
