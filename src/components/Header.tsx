import React from 'react';
import '../scss/header.scss';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

export function Header() {
    const javaBinName = '< javaBin />';
    return (
        <Navbar collapseOnSelect className="header" expand="lg" variant="dark">
            <Navbar.Brand className="header-logo" href="/">
                {javaBinName}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#features">Om javaBin</Nav.Link>
                    <NavDropdown title="Regioner" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#regioner/oslo">Oslo</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/trondheim">Trondheim</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/bergen">Bergen</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/sorlandet">Sørlandet</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/tromso">Tromsø</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/stavanger">Stavanger</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/sogn">Sogn</NavDropdown.Item>
                        <NavDropdown.Item href="#regioner/vestfold">Vestfold</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#styret">Styret</Nav.Link>
                    <Nav.Link href="#kontakt-oss"> Kontakt oss</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;
