import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='loginBanner'>
            <Container>
                <Row>
                    <Col md={6} className='pt-5 mt-5 ms-5'>
                        <Form onSubmit={handleLogin} className='mt-5 mb-5 p-5 border rounded bg-secondary bg-opacity-25 shadow-lg'>
                            <h1 className='fw-bold'>Login</h1>
                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='fw-bold'>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required />
                            </Form.Group>

                            <Button variant="info" type="submit" className='mb-3'>
                                Login
                            </Button>
                            <br />

                            <div>
                                <Button onClick={handleGoogleSignIn} variant="light" className='me-3'><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                            </div>

                            <br />

                            <Form.Text className="text-secondary">
                                Don't Have an Account? <Link to='/signUp' className='text-info fw-bold text-decoration-none'>Sign Up</Link>
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

export default Login;