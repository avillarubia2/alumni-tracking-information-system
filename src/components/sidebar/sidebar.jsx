import React from 'react'
import { Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../../assets/css/dashboard.css'
import '../sidebar/sidebar.css'
import Thumbnail from '../thumbnail/thumbnail'

const Sidebar = () => {
    return (
        <Navbar bg="light" className="col-md-3 col-lg-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <section className="px-2">
                    <div className="d-flex py-2 px-3">
                        <h3><Thumbnail /> Ronald Doe</h3>
                    </div>
                    
                    <ul className="nav flex-column">
                        <LinkContainer to="/admin/dashboard">
                            <li><a href="#" className="nav-link"><i class="fas fa-tachometer-alt text-muted mr-2"></i> Dashboard</a></li>
                        </LinkContainer>
                        <LinkContainer to="/admin/alumnis">
                            <li><a href="#" className="nav-link"><i class="fas fa-users text-muted mr-2"></i> Alumnis</a></li>
                        </LinkContainer>
                        <LinkContainer to="/admin/import">
                            <li><a href="#" className="nav-link"><i class="fas fa-file-import text-muted mr-2"></i> Import</a></li>
                        </LinkContainer>
                    </ul>
                   
                </section>
            </div>
        </Navbar>
    )
}

export default Sidebar