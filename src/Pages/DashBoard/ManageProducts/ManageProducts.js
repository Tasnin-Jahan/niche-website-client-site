import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const url = `https://afternoon-beyond-23129.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setRows(data));
    }, [])

    const handleDeleteProduct = id => {
        const url = `https://afternoon-beyond-23129.herokuapp.com/products/${id}`
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
            <h3>ALL PRODUCTS:{rows.length}</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Orders Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product-Name</TableCell>
                            <TableCell align="center">Price</TableCell>
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
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.price}</TableCell>
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

export default ManageProducts;
