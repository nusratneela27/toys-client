import React from 'react';
import { Container, Form } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    useTitle('Toy update')

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const _id = form._id.value;
        const updateToy = {
            price: price,
            quantity: quantity,
            detail: detail,
            _id: _id
        }
        console.log(updateToy);
    }


    return (
        <Container>
            <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Price</Form.Label>
                    <Form.Control type="text" name='price' placeholder="price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Available quantity</Form.Label>
                    <Form.Control type="text" name='quantity' placeholder="quantity" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Description</Form.Label>
                    <Form.Control type="text" name='detail' placeholder="Description" as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default UpdateToy;