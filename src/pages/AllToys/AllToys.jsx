import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Button, Container, Table } from 'react-bootstrap';

const AllToys = () => {
    useTitle('All Toys')
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])

    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5 mb-5'>All Toys</h1>
            <Table striped bordered hover className='mb-5'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody className='text-center'>

                    {
                        allToys?.map((toys, index) => (
                            <tr key={toys._id}>
                                <td>{index + 1}</td>
                                <td>{toys.name}</td>
                                <td>{toys.toyName}</td>
                                <td>{toys.category}</td>
                                <td>{toys.price}</td>
                                <td>{toys.quantity}</td>
                                <td>
                                    <Button variant='info'>
                                        View Details
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default AllToys;