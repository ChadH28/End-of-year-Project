import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
        <div className='container'>
            <div className="row">
                <div className="col s4"><a href='/'>CONTACT US</a></div>
                <div className="col s4"><a href='/'>ABOUT</a></div>
                <div className="col s4"><a href='/'>COMING SOON</a></div>
                <div className='footer-copyright col s12'>© 2020 By Fineprint. Made by Chad,All Ts and Cs apply</div>
            </div>
        </div>
        </footer>
    )
}

export default Footer