
import { Row, Col, Card } from "react-bootstrap";
import React from "react";

import ProfileImage from '../../assets/img/Rectangle 12.jpg'

function MyProfile() {
    return (
        <div>
            <Card mb="3" style={{maxWidth:"540px", backgroundColor:"transparent", border:"none"}} >
                <Row className="g-0">
                    <Col md="4">
                        <img src={ProfileImage} alt="Profile" className="img-fluid rounded-start"/>
                    </Col>
                    <Col md="8">
                        <Card.Body >
                        <h5 className="text-holy-red">Full Name</h5>
                        <p className="text-holy-grey">Gandi Jen</p>

                        <h5 className="text-holy-red">Email</h5>
                        <p className="text-holy-grey">nyonggpj9995@gmail.com</p>

                        <h5 className="text-holy-red">Phone</h5>
                        <p className="text-holy-grey">082198554488</p>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default MyProfile