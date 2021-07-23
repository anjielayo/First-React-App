/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './style.css';

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><span id="fid">FiD</span>
            <span id="ma">Ma</span><span id="co"> Co.</span></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to='/' exact className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' exact className="nav-link">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' exact className="nav-link">
                        Contact
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/news' exact className="nav-link">
                        News
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
} 

export default Navbar;