import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProviders';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const UpdateToy = () => {
    // const { user } = useContext(AuthContext)
    // const navigate = useNavigate()
    // useTitle('Toy update')

    // const data = useLoaderData();
    // const { _id, price, quantity, detail } = data;

    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm();

    // const updatedValue = data => {
    //     fetch(`https://toys-project-server.vercel.app/updated/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modification > 0) {
    //                 Swal.fire({
    //                     title: 'Success',
    //                     text: 'Toy Added Successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'ok'
    //                 }),
    //                     navigate('/')
    //             }
    //         })
    // }

    const handleToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const updateToy = {
            price: price,
            quantity: quantity,
            detail: detail,
        }
        console.log(updateToy);
    }

    return (
        <div className='addToyBanner'>
            <Container className='pb-5 pt-5'>
                <h1 className='text-center text-info fw-bold mt-5 mb-5'>Update Toys</h1>
                <Row>
                    <Col md={6}>


                        {/* <form
                            className="container text-center"
                            onSubmit={handleSubmit(updatedValue)}
                        >
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input
                                className="text-input"
                                {...register("price")}
                                placeholder="price"
                                defaultValue={price}
                            />
                            <input
                                className="text-input"
                                {...register("quantity")}
                                placeholder="quantity"
                                defaultValue={quantity}
                            />
                            <input
                                className="text-input"
                                {...register("detail")}
                                placeholder="detail"
                                defaultValue={detail}
                            />

                            <input className="submit-btn" value="Update Job" type="submit" />
                        </form> */}










                        <Form onSubmit={handleToy}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Price</Form.Label>
                                <Form.Control type="text" name='price' placeholder="price" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Available quantity</Form.Label>
                                <Form.Control type="text" name='quantity' placeholder="quantity" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3 d-none" controlId="formBasicEmail">
                                <Form.Control type="text" name='_id' defaultValue={_id} />
                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Description</Form.Label>
                                <Form.Control type="text" name='detail' placeholder="Description" as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="info" type="submit" className='mb-3'>
                                Update
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateToy;