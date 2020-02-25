import React, { useState } from 'react'
import { Button, Card, Col, Row, Table, InputGroup, FormControl } from 'react-bootstrap'
import CSVReader from 'react-csv-reader'
import { importAccount } from '../../services/register'
import { useEffect } from 'react'
import { getImports } from '../../services/import'

const Import = () => {

    const [csvData, setCsvData] = useState(null)
    const [isImporting, setIsImporting] = useState(false)
    const [isImportDone, setIsImportDone] = useState(false)
    const [importCount, setImportCount] = useState(0)
    const [importTotal, setImportTotal] = useState(0)
    const [imports, setImports] = useState([])

    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    const handleForce = (data) => {
        setCsvData(data)
        setImportCount(0)
        setImportTotal(data.length)
    }

    const importData = (data) => {
        setIsImporting(true)

        var counter = 1
        data.forEach((element, index) => {
            setTimeout(() => {
                importAccount(element)
                setImportCount(counter)
                counter++;
        
            }, index * 1000)
        })
    }

    const getAccounts = async () => {
        const accounts = await getImports()
        setImports(accounts)
        console.log(accounts)
    }
    useEffect(() => {
        getAccounts()
    },[])


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
            <Row className="mb-4">
                <Col>
                    <div className="py-4">
                        <h5>Uploader CSV File</h5>
                        <CSVReader
                        cssClass="react-csv-input mb-2"
                        label="Select your csv file here"
                        onFileLoaded={handleForce}
                        parserOptions={papaparseOptions}
                        />

                        {csvData && <Button variant="primary" onClick={() => importData(csvData)}>Import</Button>}
                    </div>
                    
                    { isImporting &&
                    <div className="import-log mb-3">
                        { !isImportDone ?
                            <p>Importing items ({importCount}/{importTotal})</p> : <p>Done!</p>
                        } 
                    </div>
                    }
                    
                </Col>
            </Row>

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
                                    <th className="border-top-0">Temporary Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        imports.map((account,index) => (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{account.email}</td>
                                                <td>{account.first_name}</td>
                                                <td>{account.last_name}</td>
                                                <td>{account.temp_password}</td>
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

export default Import