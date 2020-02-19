import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

const NavigationBar = ({container}) => {
    
    return (
    <>
    <Navbar bg="white" expand="lg" sticky="top">
        <Container fluid={container == "fluid" ? true : false}>
            <Navbar.Brand href="/"><strong>Alumni Tracking Information System</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/admin">Admin Dashboard</Nav.Link>
                {/* <Nav.Link href="#">Link</Nav.Link> */}
                <Nav.Link href="#">Logout</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
    
}

export default NavigationBar