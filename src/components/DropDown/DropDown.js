import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap"

import raisefund from '../../assets/img/user 2.png'
import profile from '../../assets/img/user 2.png'
import logout from '../../assets/img/user 2.png'


function DropDown() {
    
    return (
        <>

            <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-2"
                align="end"
            >

                <Dropdown.Item href="#"><img src={profile} alt="Profile" style={{height:25}} /></Dropdown.Item>
                <Dropdown.Item href="#"><img src={raisefund} alt="Raise Fund" style={{height:25}} /></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#"><img src={logout} alt="Logout" style={{height:25}} /></Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default DropDown