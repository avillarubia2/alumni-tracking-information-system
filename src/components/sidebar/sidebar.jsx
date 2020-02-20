import React from 'react'
import '../../assets/css/dashboard.css'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Thumbnail from '../thumbnail/thumbnail'

const Sidebar = () => {
    return (
        <Navbar bg="light" className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <div class="d-flex py-2 px-3">
                    <h3><Thumbnail /> Ronald Doe</h3>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/admin/alumnis">Alumnis</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/admin/import">Import</Link>
                    </li>
                </ul>
            </div>
        </Navbar>
    )
}

export default Sidebar