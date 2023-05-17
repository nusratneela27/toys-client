import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='loginBanner'>
            <Container>
                <Row>
                    <Col md={6} className='pt-5 mt-5 ms-5'>
                        <Form className='mt-5 mb-5 p-5 border rounded bg-white shadow-lg'>
                            <h1 className='fw-bold'>Please Sign Up</h1>

                            {/* <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup> */}

                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Photo URL</Form.Label>
                                <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='fw-bold'>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>

                            <Button variant="info" type="submit" className='mb-3'>
                                Sign Up
                            </Button>
                            <br />

                            <div>
                                <Button variant="light" className='me-3'><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                                <Button variant="light"><FaGithub className='me-2'></FaGithub>Login with Github</Button>
                            </div>

                            <br />

                            <Form.Text className="text-secondary">
                                Already Have an Account? <Link to='/login' className='text-info fw-bold text-decoration-none'>Login</Link>
                            </Form.Text>
                            <Form.Text className="text-success">

                            </Form.Text>
                            <br />
                            <Form.Text className="text-danger">

                            </Form.Text>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;