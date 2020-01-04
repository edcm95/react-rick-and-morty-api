import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Nav,
    Collapse,
 } from 'reactstrap';
 import { NavLink } from 'react-router-dom';


const NavigationBar = (props) => {

    const [collapsed, setCollapsed] = useState(true);

    const openNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" light>
                <NavbarToggler onClick={openNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <NavbarBrand to='/home' className="mr-auto">Rick and Morty</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink to='/characters' className='nav-link'>Characters</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}

export default NavigationBar;