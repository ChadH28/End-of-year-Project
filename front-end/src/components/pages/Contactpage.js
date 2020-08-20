import React from 'react'

function Contactpage() {
    return (
        <div class="container">
            <div>
                <h2>Contact Us</h2>
                <p>Drop us a message, we're always eager to reply:</p>
            </div>
            <div class="row">
                <div class='col s6 m6 l6'>
                    <img src="/w3images/map.jpg" style="width:100%"/>
                </div>
                <div class='col s6 m6 l6'>
                    <form action="/action_page.php">
                        <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        <label for="country">Country</label>
                            <select id="province" name="province">
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
                            <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactpage
