

import { Link } from "react-router-dom"
import '../styles/Navbar.css'

export default function Navbar() {

  return (
    <nav className="nav">
    
      <h4 className="nav--branding">
      <Link to='/' >david brandes</Link>

        <p className="nav--branding--subtitle">
          software developer
        </p>

      </h4>
      
      <ul className="nav--links ">
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/projects'>projects</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>

     
    </nav>
  )
}


