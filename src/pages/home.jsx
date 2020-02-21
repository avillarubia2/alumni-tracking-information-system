import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { loadUser } from '../redux/actions/authActions'

const Home = () => {

    loadUser();

    const data = useSelector(state => state.auth)
    //console.log(data)

    return (
        <Row>
            <Col>
                <h1>This is a Home Page</h1>
            </Col>
        </Row>
    )
}

export default Home