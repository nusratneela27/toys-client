import React, { useState } from 'react';
import { Button, CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Modal from "react-bootstrap/Modal";
// import UpdateToyModal from './UpdateToyModal';

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, photo, name, toyName, category, price, quantity } = toy;


    // const [modalShow, setModalShow] = React.useState(false);
    // const [control, setControl] = useState(false);


    // const handleToyUpdate = (data) => {
    //     fetch(`https://toys-project-server.vercel.app/updated/${data._id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.modifiedCount > 0) {
    //                 setControl(!control);
    //             }
    //             console.log(result);
    //         });
    // };

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

                {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                    Update
                </Button>
                <UpdateToyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    toy={toy}
                    handleToyUpdate={handleToyUpdate}
                /> */}
            </td>
        </tr>
    );
};

export default MyToysRow;