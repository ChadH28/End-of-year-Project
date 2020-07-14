import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };

    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <button onClick={openMenu}>&#9776;</button>
                <Link to='/'>Fineprint</Link>
            </div>
            <div className='nav-links'>
                <Link to='/'>Cart</Link>
                <Link to='/'>Sign In</Link>
                <Link to='/product/12'>Product</Link>
            </div>
        </nav>
    )
}

export default Navbar