import React from 'react';
import { Button, Container } from 'react-bootstrap';
import error from '../../assets/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Container>
            <div className='pt-5 mt-5 text-center'>
                <h1 className='fw-bold'>Uh-oh....</h1>
                <p className='fw-semibold pt-4'>This page you are looking for may have been moved, deleted or <br /> possibly never existed</p>
                <Link to='/'>
                    <Button variant='warning opacity-75' className='fw-bold'>Back to home</Button>
                </Link>
                <div className='text-center mt-5 pt-5'>
                    <img src={error} height='600' width='800' alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Error;