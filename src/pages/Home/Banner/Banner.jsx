import React from 'react';
import './Banner.css'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className='banner1'>
                    <Container>
                        <Row>
                            <Col md={6} className='pt-5 mt-5 ms-5'>
                                <h1 className='fw-bold font'>Best Kids Store <br /> & Online Shop</h1>
                                <h2 className='fw-bold text-white'>Give The Gift Of Your Children Everyday</h2>
                                <Button className='bg-warning bg-opacity-75 fw-bold mt-3'>Shop This Now</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner2'>
                    <Container>
                        <Row>
                            <Col md={6} className='pt-5 mt-5 ms-5'>
                                <h1 className='fw-bold font'>Best Kids Store <br /> & Online Shop</h1>
                                <h2 className='fw-bold text-white'>Give The Gift Of Your Children Everyday</h2>
                                <Button className='bg-warning bg-opacity-75 fw-bold mt-3'>Shop This Now</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='banner3'>
                    <Container>
                        <Row>
                            <Col md={6} className='pt-5 mt-5 ms-5'>
                                <h1 className='fw-bold font'>Best Kids Store <br /> & Online Shop</h1>
                                <h2 className='fw-bold text-white'>Give The Gift Of Your Children Everyday</h2>
                                <Button className='bg-warning bg-opacity-75 fw-bold mt-3'>Shop This Now</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;