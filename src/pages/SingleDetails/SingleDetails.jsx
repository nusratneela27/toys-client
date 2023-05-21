import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleDetails = () => {
    const details = useLoaderData()
    const { photo, toyName, name, email, price, rating, quantity, detail } = details
    return (
        <Container>
            <Row className='border rounded mt-5 mb-5 shadow'>
                <Col md={4}>
                    <div className='p-5'>
                        <img src={photo} alt="" className='rounded' height="300" width="380" />
                    </div>
                </Col>
                <Col md={8}>
                    <div className='ms-4 mt-4 pt-4 pb-4'>
                        <h3 className='fw-bold'>{toyName}</h3>
                        <p><span className='fw-bold'>Seller Name:</span> {name}</p>
                        <p><span className='fw-bold'>Seller Email:</span> {email}</p>
                        <p><span className='fw-bold'>Price:</span> {price}</p>
                        <p><span className='fw-bold'>Rating:</span> {rating}</p>
                        <p><span className='fw-bold'>Quantity:</span> {quantity}</p>
                        <p><span className='fw-bold'>Details:</span> {detail}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleDetails;