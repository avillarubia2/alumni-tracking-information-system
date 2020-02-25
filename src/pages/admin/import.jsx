import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import CSVReader from 'react-csv-reader'

const Import = () => {

    const [csvData, setCsvData] = useState(null)
    const [isImporting, setIsImporting] = useState(false)
    const [importCount, setImportCount] = useState(0)
    const [importTotal, setImportTotal] = useState(0)

    const [beach, setBeach] = useState("")

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
                setBeach(element.beach)
                setImportCount(counter)
                counter++
            }, index * 1000)
        })
    }

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
                        <p>Importing items ({importCount}/{importTotal})</p>
                    </div>
                    }
                    
                </Col>
            </Row>
        </section>
    )
}

export default Import