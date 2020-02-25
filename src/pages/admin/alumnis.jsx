import React, { useState } from 'react'
import { Card, Col, FormControl, InputGroup, Row, Table } from 'react-bootstrap'
import { getAlumni } from '../../services/account'
import { useEffect } from 'react'

const Alumnis = () => {

    const [alumnis, setAlumnis] = useState([])

    const populate = async () => {
        const accounts = await getAlumni()
        setAlumnis(accounts)
        console.log(alumnis)
    }
    useEffect(() => {
        populate()
    },[])

    return (
        <section>
            <Row>
                <Col md="6" lg="4">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="search-icon"><i className="fas fa-search"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Search..."
                        aria-label="search"
                        aria-describedby="search-icon"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                    <tr className="border-top-0">
                                    <th className="border-top-0">#</th>
                                    <th className="border-top-0">Email</th>
                                    <th className="border-top-0">First Name</th>
                                    <th className="border-top-0">Last Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        alumnis.map((alumni,index) => (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{alumni.email}</td>
                                                <td>{alumni.first_name}</td>
                                                <td>{alumni.last_name}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Alumnis