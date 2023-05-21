import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllToys = () => {
    useTitle('All Toys')
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://toys-project-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://toys-project-server.vercel.app/toyNameBySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            })
    }

    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5 mb-5'>All Toys</h1>
            <div className='text-center mb-5'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" name="text" id="" placeholder='search' className='rounded py-1 me-4' />
                <Button onClick={handleSearch}>Search</Button>
            </div>
            <Table striped bordered hover className='mb-5'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Picture</th>
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
                                <td>
                                    <img src={toys.photo} height='50px' width='55px' alt="" className='rounded' />
                                </td>
                                <td>{toys.name}</td>
                                <td>{toys.toyName}</td>
                                <td>{toys.category}</td>
                                <td>$ {toys.price}</td>
                                <td>{toys.quantity}</td>
                                <td>
                                    <Link to={`/details/${toys._id}`}>
                                        <Button variant='info'>
                                            View Details
                                        </Button>
                                    </Link>
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