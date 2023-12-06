
import "../App.css"
import { Link } from "react-router-dom"
export default function Navbar() {

  return (
    <nav className="nav">
    
      <h4 className="nav--branding">david brandes</h4>
      <ul className="nav--links">
        <li><Link to='/'>home</Link></li>
        <li><Link to='/projects'>projects</Link></li>
        <li><Link to='/contact'>contact</Link></li>
      </ul>

     
    </nav>
  )
}


