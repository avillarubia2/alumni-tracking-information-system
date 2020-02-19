import React from 'react'
import NavigationBar from '../nav/navigationBar'
import Sidebar from '../../components/sidebar/sidebar'
import Admin from '../../pages/admin/admin'
import { Row, Col, Container } from 'react-bootstrap'

const AdminHolder = () => {
    return (
        <>
            <NavigationBar container="fluid" />
            <Container fluid="true">
                <Row>
                    <Sidebar />
                    <Col>
                        <Admin />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminHolder