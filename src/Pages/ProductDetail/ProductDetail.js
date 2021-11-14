import { Alert, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';

const handleBookingSubmit = e => {
    alert('submitting');
}
const ProductDetail = () => {
    const { user } = useAuth();
    const { id } = useParams(0);
    const initialInfo = { userName: user.displayName, email: user.email, phone: '', address: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [productDetail, setProductDetail] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const productBooking = {
            ...bookingInfo,
            productName: productDetail?.name
        }
        fetch('https://afternoon-beyond-23129.herokuapp.com/bicycles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                }
                // console.log(data)
            })
        // console.log(productBooking);
        // alert('submitting');

        e.preventDefault();
    }


    useEffect(() => {
        fetch('https://afternoon-beyond-23129.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => {
                let pro = data.find(p => p._id == id);
                console.log(pro);
                setProductDetail(pro);
            });
    }, []);
    return (
        <div style={{ display: 'flex' }}>
            <Card sx={{ maxWidth: 800 }} style={{ height: '750px' }}>
                <CardMedia
                    component="img"
                    style={{ width: '500px', height: '350px', margin: '0 auto' }}
                    image={productDetail?.img}
                    alt="bicycle-image"
                />
                <CardContent >
                    <Typography gutterBottom variant="h4" component="div">
                        {productDetail?.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {productDetail?.description}
                    </Typography>
                    <Typography style={{ marginTop: '20px' }} variant="h5" color="text.primary">
                        {productDetail?.price} TK
                    </Typography>
                </CardContent>
            </Card>

            <form onSubmit={handleBookingSubmit} style={{ marginLeft: 'auto', marginRight: 'auto', width: '200px', marginTop: '30px' }}>

                <Typography gutterBottom variant="h4" component="div">
                    Book {productDetail?.name}
                </Typography>
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="userName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Phone Number"
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="address"
                    onBlur={handleOnBlur}
                    defaultValue="Address"
                    size="small"
                />
                <Button style={{ marginBottom: '10px' }} type="submit" variant="contained">Submit</Button>
                {bookingSuccess && <Alert severity="success">Booking Successfully!</Alert>}
            </form>

        </div>
    );
};

export default ProductDetail;