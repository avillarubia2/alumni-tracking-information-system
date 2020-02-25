import React, { useState } from 'react'
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../services/auth'
import Message from '../components/validator/message'
import validator from '../components/validator/validator'
import { LinkContainer } from 'react-router-bootstrap'

const Login = () => {
    const [payload, setPayload] = useState({})
    const [error, setError] = useState({})

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
        validator(error, setError, name, value)
        setPayload({ ...payload, [name]: value })
    }

    return (
        <section style={{ position: 'fixed', width: '100%', height: '100%' }}>
            <Col className='h-100'>
                <Row className='justify-content-center h-100'>
                    <Col md='8' lg='6' xl='4' className='center-xy'>
                        <div className='mt-n5 w-100'>
                            <h1 className='mb-4 text-center text-primary'>ATISLOGO</h1>
                            <Form >
                                <Card className='p-5 mb-4'>
                                    <Form.Group controlId='login-email'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type='text'
                                            name='email'
                                            placeholder='Email'
                                            onChange={handleTextChange}
                                            isValid={!error.email}
                                        />
                                        <Message message={error.email} />
                                    </Form.Group>
                                    <Form.Group className='mb-5' controlId='login-password'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            name='password'
                                            type='password'
                                            placeholder='Password'
                                            onChange={handleTextChange}
                                            isValid={!error.password}
                                        />
                                        <Message message={error.password} />
                                    </Form.Group>
                                    <Button
                                        className='mb-3'
                                        onClick={handleLogin}
                                        disabled={Object.values(error).length}
                                    >
                                        Login
                                    </Button>
                                    <p className='text-center'>or</p>

                                    <LinkContainer to='/register'>
                                        <Button variant='outline-dark' >Register</Button>
                                    </LinkContainer>
                                </Card>
                            </Form>
                            <p className='text-center'><Link to='#'>lost your password?</Link></p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </section>
    )
}

export default Login