

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

// //component
import './index.css'
import NavbarMenu from './components/Navbar/Navbar'
import ProfilePage from './Pages/Profile';
import Home from './Pages/Home';




function App() {
    return(
        <div>
            <Router>
                <NavbarMenu />
            </Router>
            
        </div>
    )
}


export default App