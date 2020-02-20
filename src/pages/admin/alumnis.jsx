import React from 'react'
import { Col, FormControl, InputGroup, Row, Table } from 'react-bootstrap'

const Alumnis = () => {
    return (
        <section>
            <Row>
                <Col md="6" lg="4">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="search-icon"><i class="fas fa-search"></i></InputGroup.Text>
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
                    <Table responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </section>
    )
}

export default Alumnis