import React, { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, logout } from '../../services/auth'
import { useEffect } from 'react'

const NavigationBar = ({ container }) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    
    useEffect(() => {
        getCurrentUser() ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false)
    });
    
    const logoutUser = () => {
        logout()
        setIsUserLoggedIn(false)
    }
    
    const userLinks = (
        <Button variant="link" onClick={() => logoutUser()}>Log Out</Button>
    )
    const guestLinks = (
        <Nav.Link href="/login">Log In</Nav.Link>
    )

    return (
        <>
            <Navbar bg="white" expand="lg" sticky="top">
                <Container fluid={container === "fluid" ? true : false}>
                    <Navbar.Brand href="/"><strong>Alumni Tracking Information System</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/admin">Admin Dashboard</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>

                            { isUserLoggedIn ? userLinks : guestLinks }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar