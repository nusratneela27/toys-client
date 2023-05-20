import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

const UpdateToyModal = (props) => {

    const handleToyUpdate = event => {
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
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Toy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleToyUpdate}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Price</Form.Label>
                        <Form.Control type="text" name='price' defaultValue={props?.toys?.price} placeholder="price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Available quantity</Form.Label>
                        <Form.Control type="text" name='quantity' defaultValue={props?.toys?.quantity} placeholder="quantity" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Description</Form.Label>
                        <Form.Control type="text" name='detail' defaultValue={props?.toys?.detail} placeholder="Description" />
                    </Form.Group>

                    <Form.Group className="mb-3 d-none" controlId="formBasicEmail">
                        <Form.Control type="text" name='_id' defaultValue={props?.toys?._id} />
                    </Form.Group>

                    <Button variant="info" type="submit" className='mb-3'>
                        Update
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateToyModal;