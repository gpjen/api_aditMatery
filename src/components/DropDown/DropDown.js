import { FormControl, InputGroup, Dropdown, DropdownButton } from "react-bootstrap"

import profile from '../../assets/img/user 2.png'
import raisefund from '../../assets/img/Group 4.png'
import logout from '../../assets/img/logout 1.png'


function DropDown() {
    
    return (
        <>



            <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-2"
                align="end"
            >

                <Dropdown.Item href="#" className="mb-3">
                    <img src={profile} alt="Profile" style={{height:20}} /> <b>Profile</b>
                </Dropdown.Item>
                <Dropdown.Item href="#" className="mb-3">
                    <img src={raisefund} alt="Raise Fund" style={{height:20}} /> <b>Raice Fund</b>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#" className="mt-3">
                    <img src={logout} alt="Logout" style={{height:20}} /> <b>Logout</b>
                </Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default DropDown