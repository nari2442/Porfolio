import {Link} from 'react-router-dom'
import { MdOutlineSubject } from "react-icons/md"
import './index.css'


const Header = ()=>(
  <div>
<nav className="header-container">
  
  <div className="name-container">
  <Link to="/">
  <div className="logo-container">

    </div>
    <h1 className="name">Narendra Reddy Komatla</h1>
    </Link>
  </div>

<div className="mobile-view-container">

</div>
  <ul className="nav-items-container">
      <Link to="/resume">
      <li className="resume-item">Resume</li>
      </Link>
      
      <hr className="line"/>
      <Link to="/projects">
      <li className="project-item">Projects</li>
      </Link>
      
      <hr className="line"/>
      <Link to="/contact">
      <li className="contact-item">Contact</li>
      </Link>
      
    </ul>
</nav>
<nav>
  <ul className="header-mobile-container">
  <li className="mobile-logo-container">

</li>
<li className="mobile-name">Narendra Reddy Komatla</li>
<MdOutlineSubject className="outline"/>
  </ul>

</nav>
  </div>

)

export default Header