import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn } from '../redux/actions/authActions'

const Home = () => {

    return (
        <Row>
            <Col>
                <h1>This is a Home Page</h1>
            </Col>
        </Row>
    )
}

export default Home