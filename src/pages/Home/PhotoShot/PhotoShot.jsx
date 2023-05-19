import React from 'react';
import { Col, Row } from 'react-bootstrap';
import photo1 from '../../../assets/questions/2.webp'
import photo2 from '../../../assets/questions/3.webp'
import photo3 from '../../../assets/questions/4.webp'
import photo4 from '../../../assets/questions/5.webp'

import { useEffect } from 'react';
import AOS from 'aos';

const PhotoShot = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

        return () => {
            AOS.refresh();
        };
    }, []);
    return (
        <div>
            <h1 className='text-center text-info fw-bold mt-5'>Recent Photoshoots</h1>
            <p className='text-center fw-semibold'>Check Gallery</p>
            <Row className='d-flex align-items-center mt-5 pt-5 mb-5 mx-auto'>
                <Col md={3}>
                    <img src={photo1} alt="" height='437px' width='440px' className='pb-5 rounded-4' data-aos="fade-top"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-sine" />
                </Col>
                <Col md={3}>
                    <img src={photo2} alt="" height='573px' width='440px' className='pb-5 rounded-4' data-aos="fade-top"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-sine" />
                </Col>

                <Col md={3}>
                    <img src={photo3} alt="" height='397px' width='440px' className='pb-5 rounded-4' data-aos="fade-bottom"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-sine" />
                </Col>
                <Col md={3}>
                    <img src={photo4} alt="" height='573px' width='440px' className='pb-5 rounded-4' data-aos="fade-bottom"
                        data-aos-duration="3000"
                        data-aos-easing="ease-in-sine" />
                </Col>
            </Row>
        </div>
    );
};

export default PhotoShot;