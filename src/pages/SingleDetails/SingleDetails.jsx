import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleDetails = () => {
    const details = useLoaderData()
    const { photo, toyName, name, email, price, rating, quantity, detail } = details
    return (
        <Container>
            <img src={photo} alt="" />
        </Container>
    );
};

export default SingleDetails;