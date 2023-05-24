import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from "sweetalert2";
import MyToysRow from './MyToysRow';

const MyToys = () => {
    useTitle('My toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://toys-project-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user, control]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-project-server.vercel.app/myToys/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Booking has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5 mb-5'>My Toys</h1>

            <Table striped bordered hover className='mb-5'>
                <thead>
                    <tr className='text-center'>
                        <th>Delete</th>
                        <th>Picture</th>
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
                        myToys.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToysRow>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default MyToys;