import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import { register } from '../services/register'

const Register = () => {
    const [payload, setPayload] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleLogin = async () => {
        delete payload['confirm_password']
        await register(payload)
    }

    const handleTextChange = ({ target: { name, value } }) => {
        setPayload({ ...payload, [name]: value })
    }

    return (
        <section style={{ position: 'fixed', width: '100%', height: '100%' }}>
            <Col className='h-100'>
                <Row className='justify-content-center h-100'>
                    <Col md='8' lg='6' xl='4' className='center-xy'>
                        <div className='mt-n5 w-100'>
                            <h1 className='mb-4 text-center text-primary'>ATISLOGO</h1>
                            <Card className='p-5 mb-4'>
                                <Card.Title>Create an account</Card.Title>
                                <Form.Group>
                                    <Form.Label>Firstname</Form.Label>
                                    <Form.Control name='first_name' placeholder='Firstname' onChange={handleTextChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control name='last_name' placeholder='Lastname' onChange={handleTextChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name='email' placeholder='Email' onChange={handleTextChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='password' type='password' placeholder='Password' onChange={handleTextChange} />
                                </Form.Group>
                                <Form.Group className='mb-5' controlId='login-confirmpassword'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name='confirm_password' type='password' placeholder='Confirm Password' onChange={handleTextChange} />
                                </Form.Group>
                                <Button variant='primary' onClick={handleLogin}>Register</Button>
                            </Card>
                            <p className='text-center'>already have account? <Link to='/login'>login here</Link></p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </section>
    )
}

export default Register