import React, { useContext, useEffect, useState } from 'react';
import { Button, CloseButton, Container, Table } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProviders';
import UpdateToyModal from './UpdateToyModal';

const MyToys = () => {
    useTitle('My toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user])

    const handleToyUpdate = (data) => {
        console.log(data);
    }

    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5 mb-5'>My Toys</h1>

            <Table striped bordered hover className='mb-5'>
                <thead>
                    <tr className='text-center'>
                        <th>Delete</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        myToys?.map((toys) => (
                            <tr key={toys._id}>
                                <td>
                                    <CloseButton></CloseButton>
                                </td>
                                <td>{toys.name}</td>
                                <td>{toys.toyName}</td>
                                <td>{toys.category}</td>
                                <td>{toys.price}</td>
                                <td>{toys.quantity}</td>
                                <td>
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
                                        Update
                                    </Button>

                                    <UpdateToyModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        toys={toys}
                                        handleToyUpdate={handleToyUpdate}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default MyToys;