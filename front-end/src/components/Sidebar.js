import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };

    return (
        <aside className='sidebar'>
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>
                &times;
            </button>
            <ul>
                <li>
                    <a href='/'>Shirts</a>
                </li>
                <li>
                    <a href='/'>Pants</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar