import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };

    return (
        <nav>
            <div class="nav-wrapper">
                <div class="brand-logo">
                    <button className="btn-floating btn-small waves-effect waves-light teal" onClick={openMenu}>&#9776;</button>
                    <Link to='/'>Fineprint</Link>
                </div>
                <ul id="nav-mobile" class="right">
                    <li><Link to='/'>Cart</Link></li>
                    {   
                        userInfo ? <li><Link to='/profile'>{userInfo.name}</Link></li>
                        :
                        <li><Link to='/signin'>Sign In</Link></li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar