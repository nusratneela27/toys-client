import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMailBulk } from 'react-icons/fa';
import './Footer.css'
import logo from '../../../assets/logo.png'
import img1 from '../../../assets/footer/1.avif'
import img2 from '../../../assets/footer/2.avif'
import img3 from '../../../assets/footer/3.avif'
import img4 from '../../../assets/footer/4.avif'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-success bg-opacity-50'>
            <Container className='py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='d-flex align-items-center gap-2'>
                            <Link to='/'>
                                <img src={logo} height='40' width='40' alt="" />
                            </Link>
                            <h1 className='fs-2 fw-bold '>Kidol</h1>
                        </div>
                        <p>Toys not only entertain,they also build minds,instil goals. A toy can keeps sadness away. It is not only meant for playing but also for enhancing knowledge and skills.</p>
                    </div>
                    <div className='col-md-2 '>
                        <h5 className='pb-4'>About</h5>
                        <p>About Us</p>
                        <p>Shop</p>
                        <p>Work With Us</p>
                        <p>Contact</p>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='pb-4'>Instagram feed</h5>
                        <div>
                            <div className='mb-3'>
                                <img src={img1} className='trans rounded me-3' height='80' width='80' alt="" />
                                <img src={img2} className='trans rounded me-3' height='80' width='80' alt="" />
                            </div>
                            <div>
                                <img src={img3} className='trans rounded me-3' height='80' width='80' alt="" />
                                <img src={img4} className='trans rounded me-3' height='80' width='80' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h5 className='pb-4'>Subscribe Newsletter</h5>
                        <p>Subscribe our newsletter to get updates about our services and offers.</p>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email Address"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="info" id="button-addon2">
                                <FaMailBulk></FaMailBulk>
                            </Button>

                        </InputGroup>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <p>Copyright @2023</p>
                    <div className='d-flex col-md-2 gap-3'>
                        <p><FaFacebook ></FaFacebook></p>
                        <p><FaInstagram></FaInstagram></p>
                        <p><FaTwitter></FaTwitter></p>
                        <p><FaYoutube></FaYoutube></p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;