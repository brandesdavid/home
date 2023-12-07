import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import portrait from '../portrait.png'
import reactLogo from '../assets/react.svg'
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

        

        <h4 className="branding">
        david brandes

        <p className="branding--subtitle">
          software engineer
        </p>

        <div className="logoBox">
          <img className="reactLogo" src={reactLogo}/>
        </div>

      </h4>
      
      
    </div>
  )
}


