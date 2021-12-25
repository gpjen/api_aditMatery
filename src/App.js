

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

// //component
import './index.css'
import NavbarMenu from './components/Navbar/Navbar'
import Content from './components/Content/Content1';
import DonationNow from './components/DonateNow/DonateNow'
// import ProfilePage from './Pages/Profile';




function App() {
    return(
        <div>
            <Router>
                <NavbarMenu />
            </Router>
            <Content />
            {/* <DonationNow /> */}
        </div>
    )
}


export default App