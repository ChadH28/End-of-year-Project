import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };

    return (
        <aside className='sidebar sidenav'>
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button btn-floating btn-small waves-effect waves-light" onClick={closeMenu}>
                &times;
            </button>
            <ul>
                <li>
                    <a className='waves-effect' href='/'>Shirts</a>
                </li>
                <li>
                    <a class="waves-effect" href='/'>Pants</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar