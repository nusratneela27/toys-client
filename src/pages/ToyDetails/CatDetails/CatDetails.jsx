import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CatDetails = () => {
    const category = useLoaderData()
    const { img, price, title } = category;

    return (
        <Container>
            <h2>This is Toy details here: {title}</h2>
        </Container>
    );
};

export default CatDetails;