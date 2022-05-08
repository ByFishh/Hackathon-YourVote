import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <ul className='NavBar'>
            <div className='rectangle register'><Link to="/register" className='NavBar_Register'>REGISTER</Link></div>
            <div className='rectangle login'><Link to="/login" className='NavBar_Login'>LOGIN</Link></div>
        </ul>
    );
}

export default NavBar;