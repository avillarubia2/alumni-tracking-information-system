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
                    <main class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Admin />
                    </main>
                </Row>
            </Container>
        </>
    )
}

export default AdminHolder