import React from 'react'
import { Card, Col, Row, Table, FormControl, Button } from 'react-bootstrap'
import Thumbnail from '../components/thumbnail/thumbnail'

const Profile = () => {
    return (
        <>
        <Row className="mb-4">
            <Col sm="3" className="mb-3">
                <div class="px-0 md-sm-2 px-lg-4">
                    <Thumbnail size="contain" />
                </div>
            </Col>
            <Col>
                <Card className="p-5">
                    <h1 className="mb-0">Ronald Doe</h1>
                    <p><span class="text-primary">ronaldoe@gmail.com</span> - Management Staff</p>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="p-5">
                    <h4>Account</h4>
                    <hr />

                    <Card.Body className="px-0">
                        <Table responsive borderless>
                            <tbody>
                                <tr>
                                    <td style={{width:"200px"}}>Firstname</td>
                                    <td><FormControl value="Ronald" placeholder="Firstname"/></td>
                                </tr>
                                <tr>
                                    <td style={{width:"200px"}}>Lastname</td>
                                    <td><FormControl value="Doe" placeholder="Lastname"/></td>
                                </tr>
                                <tr>
                                    <td style={{width:"200px"}}>Field </td>
                                    <td><FormControl value="Value" placeholder="Value"/></td>
                                </tr>
                                <tr>
                                    <td style={{width:"200px"}}>Field </td>
                                    <td><FormControl value="Value" placeholder="Value"/></td>
                                </tr>
                                <tr>
                                    <td style={{width:"200px"}}>Field </td>
                                    <td><FormControl value="Value" placeholder="Value"/></td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="text-right px-3">
                            <Button variant="primary">Save</Button>
                        </div>
                    </Card.Body>
                </Card>
                
            </Col>
        </Row>
        </>
    )
}

export default Profile