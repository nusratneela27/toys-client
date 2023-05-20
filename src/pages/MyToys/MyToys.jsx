import React, { useContext, useEffect, useState } from 'react';
import { Button, CloseButton, Container, Table } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProviders';
import UpdateToyModal from './UpdateToyModal';
import Swal from "sweetalert2";

const MyToys = () => {
    useTitle('My toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user, control])

    // const handleToyUpdate = (data) => {
    //     fetch(`http://localhost:5000/updateToy/${data._id}`, {
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.modifiedCount > 0) {
    //                 setControl(!control);
    //             }
    //             console.log(result);
    //         });
    // };

    // const handleDelete = id => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     })
    //         .then((result) => {
    //             if (result.isConfirmed) {
    //                 fetch(`http://localhost:5000/myToys/${id}`, {
    //                     method: 'DELETE'
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         console.log(data);
    //                         if (data.deletedCount > 0) {
    //                             Swal.fire(
    //                                 'Deleted!',
    //                                 'Your Booking has been deleted.',
    //                                 'success'
    //                             )
    //                             const remaining = myToys.filter(booking => booking._id !== id);
    //                             setMyToys(remaining)
    //                         }
    //                     })
    //             }
    //         })
    // }

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