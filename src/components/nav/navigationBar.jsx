import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavigationBar = ({ container }) => {
    return (
        <Navbar bg="white" expand="lg" sticky="top">
            <Container fluid={container === "fluid" ? true : false}>
                <Navbar.Brand href="/"><strong>Alumni Tracking Information System</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/admin">Admin Dashboard</Nav.Link>
                        <Nav.Link href="#">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar