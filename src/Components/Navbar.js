import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='my-3 mx-3'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                 <Link to='/home'><div className="spinner" style={{ width: '2rem', height: '2rem', border: '2px currentColor', borderRadius: '1rem', backgroundColor: 'orange' }} role="status">
                    </div></Link>
                    <Link className="navbar-brand fw-bold mx-2" to="/home">Rushikesh Shinde</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               <Link className="nav-link" aria-current="page" to="/resume">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/project">Project</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
