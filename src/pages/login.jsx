import React from 'react'
import { Row, Col, Card, Button, FormControl, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        
        <section style={{position:"fixed",width:"100%",height:"100%"}}>
            <Col className="h-100">
                <Row className="justify-content-center h-100">
                    <Col md="8" lg="6" xl="4" className="center-xy">
                        <div className="mt-n5 w-100">
                            <h1 className="mb-4 text-center text-primary">ATISLOGO</h1>
                            <Card className="p-5 mb-4">
                                <Form.Group controlId="login-email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="password" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="login-password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className="mb-3">Login</Button>
                                <p className="text-center">or</p>
                                <Button variant="outline-dark">Register</Button>
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