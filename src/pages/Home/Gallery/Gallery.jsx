import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../../../assets/gallery/1.avif'
import img2 from '../../../assets/gallery/2.avif'
import img3 from '../../../assets/gallery/3.avif'
import img4 from '../../../assets/gallery/4.jpg'
import img5 from '../../../assets/gallery/5.avif'
import img6 from '../../../assets/gallery/6.avif'

import { useEffect } from 'react';
import AOS from 'aos';

const Gallery = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5 mb-5'>Welcome To Our Collections Gallery</h1>
            <hr />
            <CardGroup data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-center">
                <Card className='m-2 rounded border-none' >
                    <Card.Img variant="top" src={img1} className='rounded' />
                    <Card.Body>
                        <Card.Title>Teddy Bear collections</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded'>
                    <Card.Img variant="top" src={img2} className='rounded' />
                    <Card.Body>
                        <Card.Title>Disney characters toys collections</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded'>
                    <Card.Img variant="top" src={img3} className='rounded' />
                    <Card.Body>
                        <Card.Title>Stuffed toy collections</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup >
            <CardGroup className='mb-5' data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-center">
                <Card className='m-2 rounded'>
                    <Card.Img variant="top" src={img5} className='rounded' />
                    <Card.Body>
                        <Card.Title>Plush toys collections</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded'>
                    <Card.Img variant="top" src={img4} className='rounded' />
                    <Card.Body>
                        <Card.Title>Soft & weddell toys collections</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded'>
                    <Card.Img variant="top" src={img6} className='rounded' />
                    <Card.Body>
                        <Card.Title>Animal toys collections</Card.Title>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default Gallery;