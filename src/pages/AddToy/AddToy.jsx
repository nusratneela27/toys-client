import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    useTitle('Add Toy')
    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const addToy = {
            photo: photo,
            toyName: toyName,
            email,
            name,
            category: category,
            price: price,
            rating: rating,
            quantity: quantity,
            detail: detail,
        }

        console.log(photo, toyName, name, email, category, price, rating, quantity, detail);
        console.log(addToy);

        fetch('https://toys-project-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }
    return (
        <div className='addToyBanner'>
            <Container className='pb-5 pt-5'>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleAddToy} className='bg-info bg-opacity-25 rounded p-4 mt-5 mb-5'>

                            <div className='d-flex justify-content-center gap-5 '>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>Toy Name</Form.Label>
                                        <Form.Control type="text" name='toyName' placeholder="Enter toy Name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>Name</Form.Label>
                                        <Form.Control type="text" name='name' defaultValue={user?.displayName} placeholder="Enter Your Name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='fw-bold'>Email address</Form.Label>
                                        <Form.Control type="email" name="email" defaultValue={user?.email} placeholder="name@example.com" />
                                    </Form.Group>
                                </div>

                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>Price</Form.Label>
                                        <Form.Control type="text" name='price' placeholder="price" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>Rating</Form.Label>
                                        <Form.Control type="text" name='rating' placeholder="Rating" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>Available quantity</Form.Label>
                                        <Form.Control type="text" name='quantity' placeholder="quantity" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Select aria-label="Default select example" name='category' required>
                                            <option value="teddy">Teddy</option>
                                            <option value="cat">Cat</option>
                                            <option value="dog">Dog</option>
                                        </Form.Select>
                                    </Form.Group>

                                </div>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Description</Form.Label>
                                <Form.Control type="text" name='detail' placeholder="Description" as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="info" type="submit" className='mb-3'>
                                Add A Toy
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddToy;