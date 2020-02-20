import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Import = () => {
    return (
        <section>
            <Row className="mb-4">
                <Col md="10" lg="8" xl="6">
                    <Card className="p-5">
                        <Card.Body className="px-0">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button variant="primary">Download Template File</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="p-4">
                    <h5>File Uploader Here</h5>
                    </p>
                </Col>
            </Row>
        </section>
    )
}

export default Import