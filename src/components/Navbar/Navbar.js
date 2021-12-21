import './Navbar.css'
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import ComLogo from '../../assets/img/Icon.png'

function ComNavbar() {
    return (
        <Navbar className='Nap' expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="#"><img className='Icon' src={ComLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                </Nav>
                    <Nav.Link href="#" className='LoginButton'>Login</Nav.Link>
                    <Button variant="light" className='RegisterButton'>Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default ComNavbar;




















