import React from 'react';
import './Navbar.css';

function Navbar() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };

    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <button onClick={openMenu}>&#9776;</button>
                <a href='/'>Fineprint</a>
            </div>
            <div className='nav-links'>
                <a href='/'>Cart</a>
                <a href='/'>Sign In</a>
            </div>
        </nav>
    )
}

export default Navbar