import './Navbar.css'
import {Container, Nav, Navbar} from 'react-bootstrap'
import ComLogo from '../../assets/img/Icon.png'
import BtnRegister from '../Register/Register'

//router
import {BrowserRouter as Router, Swict, Route, Link} from 'react-router-dom'


function ComNavbar() {
    return (
        <Router>
            <Navbar className='Nap' expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="#"><img className='Icon' src={ComLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                    </Nav>
                        <Nav.Link href="#" className='LoginButton'>Login</Nav.Link>
                        <BtnRegister />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}


export default ComNavbar;




















