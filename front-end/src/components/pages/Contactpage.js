import React from 'react';
import './Contactpage.css';

function Contactpage() {
    return (
        <div className="container">
            <div>
                <h2>Contact Us</h2>
                <p>Drop us a message, we're always eager to reply:</p>
            </div>
            <div className="row">
                <div className='col s6 m6 l6'>
                    <img src="/w3images/map.jpg" />
                </div>
                <div className='col s6 m6 l6'>
                    <form action="/action_page.php">
                        <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        <label htmlFor="country">Province / State</label>
                            <select className="browser-default" id="province" name="province">
                                <option value="Western Cape">Western Cape</option>
                                <option value="Eastern Cape">Eastern Cape</option>
                                <option value="Northern Cape">Northern Cape</option>
                                <option value="North West">North West</option>
                                <option value="Free State">Free State</option>
                                <option value="Kwazulu Natal">Kwazulu Natal</option>
                                <option value="Gauteng">Gauteng</option>
                                <option value="Limpopo">Limpopo</option>
                                <option value="Mpumalanga">Mpumalanga</option>
                            </select>
                        <label for="subject">Subject</label> 
                            <textarea id="subject" name="subject" placeholder="Write something.." className="materialize-textarea"  data-length="120"/>
                        <input class="waves-effect waves-light btn" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactpage
