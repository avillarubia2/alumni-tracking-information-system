import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Thumbnail from '../components/thumbnail/thumbnail'

const Profile = () => {
    return (
        <Row>
            <Col lg="3">
                <Thumbnail size="xl" />
            </Col>
            <Col>
                <Card className="p-5">
                    <h1>Ronald Doe</h1>
                    <hr />
                    <h4>This is a Profile Page</h4>
                </Card>
            </Col>
        </Row>
    )
}

export default Profile