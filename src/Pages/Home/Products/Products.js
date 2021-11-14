import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (searchText !== "") {
            let filter_data = products.filter(obj => obj.name.includes(searchText));
            setProducts(filter_data)
        } else {
            fetch('https://afternoon-beyond-23129.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data));

        }
    }, [searchText])

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    return (

        <Box sx={{ width: '100%' }}>
            <Container>
                <div className="search-box" style={{ marginTop: '20px' }}>
                    <input onChange={handleChange} type="text" className="p-2" placeholder="enter product name" />
                    <button className="btn btn-primary m-3">Search</button>
                </div>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'rgb(77, 69, 124)' }} variant="h4" component="div">
                    OUR PRODUCTS
                </Typography>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>).slice(0, 6)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;