import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {

    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    useTitle('Sign Up')

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUser(name, photo)
                setError('')
                event.target.reset();
                toast.success('Successfully SignUp', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
            .catch(error => {
                console.log(error.message);
                setError('The password is less than 6 characters')
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                toast.success('Successfully SignUp With Google', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
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
                        <Form onSubmit={handleSignUp} className='mt-5 mb-5 p-5 border rounded bg-secondary bg-opacity-25 shadow-lg'>
                            <h1 className='fw-bold'>Please Sign Up</h1>

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
                                <Button onClick={handleGoogleSignIn} variant="light" className='me-3'><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                            </div>
                            <br />

                            <Form.Text className="text-secondary">
                                Already Have an Account? <Link to='/login' className='text-info fw-bold text-decoration-none'>Login</Link>
                            </Form.Text>
                            <br />
                            <Form.Text className="text-danger fw-bold fs-5">
                                {error}
                            </Form.Text>
                        </Form>
                    </Col>
                </Row>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};

export default SignUp;