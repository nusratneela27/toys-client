import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { handleToyUpdate } = props;

    const handle = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const _id = form._id.value;
        const updateToy = {
            price: price,
            quantity: quantity,
            detail: detail,
            _id: _id
        }
        console.log(updateToy);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Toy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <form
                    className="container text-center"
                    onSubmit={handleSubmit(handleToyUpdate)}
                >
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input
                        className="text-input"
                        {...register("price")}
                        placeholder="price"
                        defaultValue={props?.toys?.price}
                    />
                    <input
                        className="text-input"
                        {...register("quantity")}
                        placeholder="quantity"
                        defaultValue={props?.toys?.quantity}
                    />
                    <input
                        className="text-input"
                        {...register("detail")}
                        placeholder="detail"
                        defaultValue={props?.toys?.detail}
                    />
                    <input
                        className="text-input d-none"
                        {...register("_id")}
                        value={props?.toys?._id}
                    />

                    <input className="submit-btn" value="Update Job" type="submit" />
                </form>















                {/* <Form onSubmit={handle(handleToyUpdate)}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Price</Form.Label>
                        <Form.Control type="text" name='price' defaultValue={props?.toys?.price} placeholder="price" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Available quantity</Form.Label>
                        <Form.Control type="text" name='quantity' defaultValue={props?.toys?.quantity} placeholder="quantity" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-bold'>Description</Form.Label>
                        <Form.Control type="text" name='detail' defaultValue={props?.toys?.detail} placeholder="Description" />
                    </Form.Group>

                    <Form.Group className="mb-3 d-none" controlId="formBasicEmail">
                        <Form.Control type="text" name='_id' defaultValue={props?.toys?._id} />
                    </Form.Group>

                    <Button variant="info" type="submit" className='mb-3'>
                        Update
                    </Button>
                </Form> */}
            </Modal.Body>
        </Modal>
    );
};

export default UpdateToyModal;