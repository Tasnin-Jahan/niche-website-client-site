import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';
import Navigation from '../Shared/Navigation/Navigation';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([])
    useEffect(() => {
        fetch('https://afternoon-beyond-23129.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMoreProducts(data)
            });
    }, [])
    return (
        <Box style={{ marginBottom: '70px' }} sx={{ width: '100%' }}>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'rgb(77, 69, 124)' }} variant="h4" component="div">
                    CHOOSE YOUR BICYCLE
                </Typography>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
                    {
                        moreProducts.map(moreProduct => <MoreProduct
                            key={moreProduct.name}
                            moreProduct={moreProduct}
                        ></MoreProduct>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default MoreProducts;