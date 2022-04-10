import React from 'react'
import contacticon1 from '../assets/icons-github.svg'
import contacticon2 from '../assets/icons-linkedin.svg'
import contacticon3 from '../assets/icons-mailbox.svg'
import contacticon4 from '../assets/icons-instagram.svg'

export default function ContactPage(){
    return (<div>
        <h3>Contacts</h3>
        <div className="contact-div">

        <div className="contact-icon">
           <a href="https://spaced-problems.herokuapp.com/" target="_blank">
                <img src={contacticon1} className="contact-icon-img" alt="Github" />
            </a>
        </div>

        <div className="contact-icon">
           <a href="https://spaced-problems.herokuapp.com/" target="_blank">
                <img src={contacticon2} className="contact-icon-img" alt="Github" />
            </a>
        </div>

        <div className="contact-icon">
           <a href="https://spaced-problems.herokuapp.com/" target="_blank">
                <img src={contacticon3} className="contact-icon-img" alt="Github" />
            </a>
        </div>

        <div className="contact-icon">
           <a href="https://spaced-problems.herokuapp.com/" target="_blank">
                <img src={contacticon4} className="contact-icon-img" alt="Github" />
            </a>
        </div>

        </div>
    </div>)
      
    
};