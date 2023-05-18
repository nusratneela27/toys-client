import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icons1 from '../../../assets/gallery/11.webp'
import icons2 from '../../../assets/gallery/12.webp'
import icons3 from '../../../assets/gallery/13.webp'
import icons4 from '../../../assets/gallery/14.webp'

const Icons = () => {
    return (
        <Container>
            <Row className='text-center mt-5 pt-5 mb-5'>
                <Col md={3}>
                    <img src={icons1} alt="" className='pb-5' />
                </Col>
                <Col md={3}>
                    <img src={icons2} alt="" className='pb-5' />
                </Col>
                <Col md={3}>
                    <img src={icons3} alt="" className='pb-5' />
                </Col>
                <Col md={3}>
                    <img src={icons4} alt="" className='pb-5' />
                </Col>
            </Row>
        </Container>
    );
};

export default Icons; <h1>this is icons</h1>