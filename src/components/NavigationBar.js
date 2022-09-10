import { 
    Navbar, 
    Nav, 
    Collapse, 
    NavbarToggler, 
    NavItem } 
    from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                        <i className='fa fa-info' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <i className='fa fa-shopping-cart' /> Shop
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                        <i className='fa fa-address-card' /> Contact
                        </NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    );
};

export default NavigationBar;