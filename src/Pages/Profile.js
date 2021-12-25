
import { Row, Col } from "react-bootstrap";
import React from "react";

import ProfileImage from '../assets/img/Rectangle 12.jpg'

function ProfilePage() {
    return (
        <div>
            <Row>
                <Col md="12"><h3>My Profile</h3></Col>
                <Col md="5">
                    <img src={ProfileImage} alt="Profile" />
                </Col>
                <Col md="7">
                    <h5 className="text-holy-red">Full Name</h5>
                    <p className="text-holy-grey">Gandi Jen</p>

                    <h5 className="text-holy-red">Email</h5>
                    <p className="text-holy-grey">nyonggpj9995@gmail.com</p>

                    <h5 className="text-holy-red">Phone</h5>
                    <p className="text-holy-grey">082198554488</p>
                </Col>
            </Row>
        </div>
    )
}

export default ProfilePage