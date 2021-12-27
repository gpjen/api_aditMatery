import { Row, Col } from "react-bootstrap";
import './Transaction.css'


export default function HistoryDonation() {
    return (
        <Row className="rounded bg-white p-2 pb-0">
            <Col md={12}>
                <p className="fw-bold mb-3 size-16">The Strength of a People. Power of Community </p>
            </Col>
            <Col md={12}>
            <p className="size-12"><b>Saturday</b>, 12 April 2021 </p>
            </Col>
            <Col md={8}>
            <p className="size-13 text-holy-red fw-bold">Total : Rp 45.000 </p>
            </Col>
            <Col md={4}>
                <p className="finished" variant="success">Finished</p>
            </Col>
        </Row>
    )
}