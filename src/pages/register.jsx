import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import { register } from '../services/register'
import Message from '../components/validator/message'
import validator from '../components/validator/validator'

const Register = () => {
    const [payload, setPayload] = useState({})
    const [error, setError] = useState({})

    const handleLogin = async () => {
        const { password, confirm_password } = payload
        if (password !== confirm_password)
            setError({ ...error, 'differentPasswords': 'Please match the passwords.' })
        else setError({ ...error, 'differentPasswords': '' })

        delete payload['confirm_password']
        await register(payload)
    }

    const handleTextChange = ({ target: { name, value } }) => {
        validator(error, setError, name, value)
        setPayload({ ...payload, [name]: value })
    }

    return (
        <section style={{ position: 'fixed', width: '100%', height: '100%' }}>
            {console.log(error)}
            <Col className='h-100'>
                <Row className='justify-content-center h-100'>
                    <Col md='8' lg='6' xl='4' className='center-xy'>
                        <div className='mt-n5 w-100'>
                            <h1 className='mb-4 text-center text-primary'>ATISLOGO</h1>
                            <Card className='p-5 mb-4'>
                                <Card.Title>Create an account</Card.Title>
                                <Form.Group>
                                    <Form.Label>Firstname</Form.Label>
                                    <Form.Control
                                        required
                                        name='first_name'
                                        placeholder='Firstname'
                                        isValid={!error.first_name}
                                        onChange={handleTextChange} />
                                    <Message message={error.first_name} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control
                                        required
                                        name='last_name'
                                        placeholder='Lastname'
                                        isValid={!error.last_name}
                                        onChange={handleTextChange} />
                                    <Message message={error.last_name} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        name='email'
                                        placeholder='Email'
                                        isValid={!error.email}
                                        onChange={handleTextChange} />
                                    <Message message={error.email} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                        isValid={!error.password}
                                        onChange={handleTextChange} />
                                    <Message message={error.password} />
                                </Form.Group>
                                <Form.Group className='mb-5' controlId='login-confirmpassword'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        name='confirm_password'
                                        type='password'
                                        placeholder='Confirm Password'
                                        isValid={!error.confirm_password}
                                        onChange={handleTextChange} />
                                    <Message message={error.confirm_password} />
                                </Form.Group>
                                <Button variant='primary' onClick={handleLogin} disabled={Object.values(error).length}>Register</Button>
                                <Message message={error.differentPasswords} />
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