import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Brand>javaBin</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link target="blank" href="https://www.javazone.no">Javazone</Nav.Link>
                <Nav.Link target="blank" href="https://">Rebell</Nav.Link>
            </Nav>
        </Navbar>  
    );
}

export default Footer;
