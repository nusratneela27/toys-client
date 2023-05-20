import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleDetails = () => {
    const details = useLoaderData()
    const { price } = details
    return (
        <div>
            <h2>details: {price}</h2>
        </div>
    );
};

export default SingleDetails;