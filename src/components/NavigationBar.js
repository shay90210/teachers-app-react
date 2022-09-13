import { 
    Navbar, 
    Nav, 
    NavItem,
    NavbarToggler,
    Collapse } 
    from 'reactstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar light color='dark' className='nav-bar' sticky='top' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                            <i className='fa fa-user' /> About
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