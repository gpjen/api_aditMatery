


import {Button, Modal, Form} from "react-bootstrap";
import { useState } from "react";
import './Login.css';



function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="light" className='RegisterButton' onClick={handleShow}>Register</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <h4 className="fw-bold my-4">Register</h4>
                    
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" required className="py-2"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required className="py-2"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Full Name" required className="py-2"/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className="btnRegister btn-lg mt-4" type="submit">Register</Button>
                        </div>
                        <p className="text-muted text-center mt-3">
                            Already have an account ? 
                        </p>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Login;