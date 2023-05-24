import React, { useState } from 'react';
import { Button, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, photo, name, toyName, category, price, quantity } = toy;;

    return (
        <tr>
            <td className='pt-3'>
                <CloseButton onClick={() => handleDelete(_id)}></CloseButton>
            </td>
            <td>
                <img src={photo} height='50px' width='55px' alt="" className='rounded' />
            </td>
            <td className='pt-3'>{name}</td>
            <td className='pt-3'>{toyName}</td>
            <td className='pt-3'>{category}</td>
            <td className='pt-3'>$ {price}</td>
            <td className='pt-3'>{quantity}</td>
            <td className='pt-3'>
                <Link to={`/toyUpdate/${_id}`}>
                    <Button>Update</Button>
                </Link>
            </td>
        </tr>
    );
};

export default MyToysRow;