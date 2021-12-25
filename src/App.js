

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

// //component
import './index.css'
import ComLogo from './assets/img/Icon.png'
import BtnRegister from './components/Register/Register'
import Login from './components/Login/Login'
import {Container, Nav, Navbar} from 'react-bootstrap'
import Content from './components/Content/Content1';
import DonationNow from './components/DonateNow/DonateNow'
import ProfilePage from './components/Pages/Profile';




function App() {
    return(
        <div>
            <Router>
                <Navbar className='Nap' expand="sm" variant="dark">
                    <Container>
                        <Navbar.Brand href="#"><img className='Icon' src={ComLogo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        </Nav>
                            <Login />
                            <BtnRegister />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Router>

            <ProfilePage />
            
            {/* <Content />
            <DonationNow /> */}
        </div>
    )
}


export default App