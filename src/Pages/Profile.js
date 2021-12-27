
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Transaction from "../components/Transaction/Transaction";
import Info from "../components/Info/Info";

function ProfilePage() {
    return (
        <div className="bg-holy-grey py-5" style={{minHeight:"90vh"}}>
            <Container>
                <Row>
                    <Col md="7" >
                        <Row>
                            <Col md="12" >
                                <h3>My Profile</h3>
                            </Col>
                            <Col md="12" >
                                <Info />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="5">
                        <Row>
                            <Col md="12">
                                <h3>History Donation</h3>
                            </Col>
                            <Col md="12">
                                <Transaction />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfilePage