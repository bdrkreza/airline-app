import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12 " style={{ background: '#3E3EEE' }}>
                    <Navbar variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                <Nav.Link href="/contact-us">About Us</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Nav.Link href="/signIn">
                                <Button className="ml-3 mr-3" variant="outline-success">Login</Button>
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
};

export default NavBar;