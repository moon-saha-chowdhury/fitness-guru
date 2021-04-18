import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                    <h3 className="mb-5 text-warning "><strong><FontAwesomeIcon icon={faDumbbell} /> Fitness Guru</strong></h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-warning fw-bold" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-warning fw-bold" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-warning fw-bold" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-warning fw-bold" to="/dashboard">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-warning fw-bold" to="#">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-5 text-warning fw-bold " to="#">Contact Us</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;