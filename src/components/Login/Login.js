
import './Login.css';
import {Button, Modal, Form} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
    const [show, setShow] = useState(false);
    const handleCloseLogin = () => setShow(false);
    const handleShowLogin = () => setShow(true);

    return (
        <div>

            <Link variant="light" className='LoginButton mb-3' onClick={handleShowLogin}>Login</Link>


            <Modal show={show} onHide={handleCloseLogin}>
                <Modal.Body>
                    <h4 className="fw-bold my-4">Login</h4>
                    
                    <Form className="login">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" required className="py-2"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required className="py-2"/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className="btnLogin btn-lg mt-4" type="submit">Login</Button>
                        </div>
                        <p className=" text-center mt-4">
                            Don't have an account ? Klik <b>Here</b>
                        </p>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Login;