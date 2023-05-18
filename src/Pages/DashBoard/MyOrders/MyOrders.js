import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [rows, setRows] = useState([])

    useEffect(() => {
        const url = `https://bicycle-shop-server.vercel.app/bicycles?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setRows(data));
    }, [])

    const handleDeleteProduct = id => {
        const url = `https://bicycle-shop-server.vercel.app/bicycles/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainingProducts = rows.filter(row => row._id !== id)
                    setRows(remainingProducts);
                }
            })
    }


    return (
        <div>
            <h3>ORDERS:{rows.length}</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Product-Name</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Delete Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userName}
                                </TableCell>
                                <TableCell align="center">{row.productName}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.address}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => handleDeleteProduct(row._id)}><DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;
