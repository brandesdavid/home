import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import portrait from '../portrait.png'

import reactLogo from '../assets/react.svg'
import pythonLogo from '../assets/python.png'
import javascriptLogo from '../assets/js.png'
import cLogo from '../assets/c.svg'
import nodejsLogo from '../assets/nodejs.svg'
import viteLogo from '../assets/vite.svg'
import githubLogo from '../assets/gh.png'

export default function Home() {

  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('./pages/home.md')
    .then(response => response.text())
    .then(text => setMarkdown(text))
  })

  return (

    <div className="home">
        <img className="home--portrait" src={portrait} alt="" />

        <ul className="home--links">
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/projects'>projects</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>

        
        
        <div className="mobile--branding--logo">
          
          <h4 className="branding">
          david brandes

      
          <p className="branding--subtitle">
            software developer
          </p>

          <div className="logoBox">
            <img className="reactLogo" src={reactLogo}/>
            <img className="viteLogo" src={viteLogo}/>
            <img className="javascriptLogo" src={javascriptLogo}/>
            <img className="nodejsLogo" src={nodejsLogo}/>
            <img className="pythonLogo" src={pythonLogo}/>
            <img className="cLogo" src={cLogo}/>
          </div>

          </h4>
        </div>
      
    </div>
  )
}


