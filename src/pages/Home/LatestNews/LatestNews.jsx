import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import news1 from '../../../assets/news/1.webp'
import news2 from '../../../assets/news/2.webp'
import news3 from '../../../assets/news/3.webp'
import news4 from '../../../assets/news/4.webp'
import news5 from '../../../assets/news/5.webp'
import news6 from '../../../assets/news/6.webp'

const LatestNews = () => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };


    return (
        <Container>
            <h1 className='text-center text-info fw-bold mt-5'>Latest News</h1>
            <p className='text-center fw-semibold'>OUR NEWS & EVENTS</p>
            <Slider className='pb-5 mb-5' {...settings}>

                <Card className='m-2 borders' >
                    <Card.Img variant="top" src={news1} className='rounded-pill p-4' />
                    <Card.Body>
                        <Card.Title>-- Toyman food habits</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded borders' >
                    <Card.Img variant="top" src={news2} className='rounded-pill p-4' />
                    <Card.Body>
                        <Card.Title>-- Beautiful smile in the world</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded borders' >
                    <Card.Img variant="top" src={news3} className='rounded-pill p-4' />
                    <Card.Body>
                        <Card.Title>-- 2023 toy for your kids</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded borders' >
                    <Card.Img variant="top" src={news4} className='rounded-pill p-4' />
                    <Card.Body>
                        <Card.Title>-- How to teach block your kids</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded borders' >
                    <Card.Img variant="top" src={news5} className='rounded-pill p-4' />
                    <Card.Body>
                        <Card.Title>-- Cute baby for new toy</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='m-2 rounded borders' >
                    <Card.Img variant="top" src={news6} className='rounded-pill p-4' />
                    <Card.Body>
                        <Card.Title>-- Hello Birthday baby boy</Card.Title>
                    </Card.Body>
                </Card>
            </Slider>

        </Container>
    );
};

export default LatestNews;