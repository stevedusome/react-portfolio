import React from 'react'
import resume from '../assets/steve-dusome-resume.pdf'

import downloadicon from '../assets/icons-download.svg'

export default function ResumePage (){
    return (<div>
        <h3>Resume</h3>

        <div className="contact-div">

        <div className="download-icon">
           <a href={resume} download >
                <img src={downloadicon} className="contact-icon-img" alt="Github" />
            </a>
        </div>
        </div>
    </div>)
      
    
};