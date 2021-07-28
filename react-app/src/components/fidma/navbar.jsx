/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faNewspaper,faAddressCard,faUser,faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
//import './style.css';

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#"><span id="fid" style={{color:'yellow'}}>FiD</span>
            <span id="ma" style={{color:'white'}}>Ma</span><span id="co" style={{color:'white'}}> Co.</span></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to='/' exact className="nav-link">
                    <FontAwesomeIcon icon={faHome} className="mr-2"/>
                       Home
                    </NavLink>   
                </li>
                <li className="nav-item">
                    <NavLink to='/about' exact className="nav-link">
                    <FontAwesomeIcon icon={faUser} className="mr-2"/>  
                    About  
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' exact className="nav-link">
                    <FontAwesomeIcon icon={faAddressCard} className="mr-2"/>Contact  
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/news' exact className="nav-link">
                    <FontAwesomeIcon icon={faNewspaper} className="mr-2"/>News  
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/faq' exact className="nav-link">
                    <FontAwesomeIcon icon={faQuestionCircle} className="mr-2"/>Faq  
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
} 

export default Navbar;