import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <section>
            <Row className="mb-4 row-eq-height">
                <Col>
                    <Card className="h-100">
                        <section>

                        </section>
                    </Card>
                </Col>
                <Col>
                    <Row className="mb-4">
                        <Col>
                            <Card>
                                <section>
                                    
                                </section>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <section>
                                    
                                </section>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <section>

                        </section>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Dashboard