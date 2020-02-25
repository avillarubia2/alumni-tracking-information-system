import React, { useState } from 'react'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../services/auth'
import { LinkContainer } from 'react-router-bootstrap'

const Login = () => {
    const [payload, setPayload] = useState({ email: '', password: '' })

    let history = useHistory();

    const handleLogin = async () => {
        try {
            await login(payload)
            history.push('/')
        } catch (e) {
            console.log(e)
        }
    }

    const handleTextChange = ({ target: { name, value } }) => {
        setPayload({ ...payload, [name]: value })
    }

    return (
        <section style={{ position: "fixed", width: "100%", height: "100%" }}>
            <Col className="h-100">
                <Row className="justify-content-center h-100">
                    <Col md="8" lg="6" xl="4" className="center-xy">
                        <div className="mt-n5 w-100">
                            <h1 className="mb-4 text-center text-primary">ATISLOGO</h1>
                            <Card className="p-5 mb-4">
                                <Form.Group controlId="login-email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" placeholder="Email" onChange={handleTextChange} />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="login-password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" onChange={handleTextChange} />
                                </Form.Group>
                                <Button className="mb-3" onClick={handleLogin}>Login</Button>
                                <p className="text-center">or</p>
                                <LinkContainer to="/register">
                                    <Button variant="outline-dark">Register</Button>
                                </LinkContainer>
                            </Card>
                            <p className="text-center"><Link to="#">lost your password?</Link></p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </section>
    )
}

export default Login