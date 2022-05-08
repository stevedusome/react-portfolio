import React from 'react'
import myphoto from '../assets/myphoto.jpg'

export default function MainMenu (){
    return (<div>
        <h3>About Me</h3>
        <div className="parent fullwidth center"> 
        <div className="iconwing">
            <p>REACT</p>
            <p>MONGO</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>

        <img src={myphoto} className="my-photo" alt="Me" />

        <div className="iconwing">
            <p>NODE</p>
            <p>MYSQL</p>
            <p>JS</p>
            <p>REST</p>

        </div>
        </div>
        <div className="bottombar">
            <div><p className="bold">U of T</p>
                  <p>Web Dev</p>

            </div>
            <div>
                <p className="bold">Fanshawe</p>
                <p>Audio Post</p>
                
            </div>
            <div>
                <p className="bold">Fanshawe</p>
                <p>Music</p>

            </div>
        </div>
    </div>)
      
    
};