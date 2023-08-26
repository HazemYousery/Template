import React from 'react';
import './contact.css'
const Contact =()=>{
    return (
        <div>
            <div class="drop">
            <div class="container">
                <h2 class="drop-title"><span>Drop </span>Me A line</h2>
                <form action="">
                    <div class="form-input">
                        <input className='i' type="text" placeholder="Your Name" />
                        <input className='e' type="email" placeholder="Your Email" />
                
                    <input className='t' type="text" class="sub" placeholder="Your Subject" />
                    <div className='ay'>
                    <textarea className='a' cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input className='s' type="submit" value="Send Message" />
                    </div>
                    </div>

                </form>
        </div>
        </div>
        </div>
    )
}
export default Contact;