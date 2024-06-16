import React from 'react'
import './navbar.css'
import pdf from '../../pdf/resume.pdf'
import { Link } from 'react-scroll'
const Navbar = () => {

  return (
    
    <nav className='navbar' >
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
          <h3> Prathamesh.</h3>
          </div>
        <div className="menu">

        <Link spy={true} to='Home' activeClass='activeClass'>
           <a href="/Home" className="menuitems">HOME</a>

         </Link>
         <Link spy={true} to='About'>
           <a href="/About" className="menuitems">ABOUT</a>
           </Link>
    
           <Link spy={true} to='Portfolio'>
           <a href="/Portfolio" className="menuitems">PROJECTS</a>
           </Link>
           <Link spy={true} to='Skills'>
           <a href="/Skills"  className="menuitems">SKILLS</a>
           </Link>
           <Link spy={true} to='Contact'>
           <a href="/Contact" className="menuitems">CONTACT</a>
           </Link>
          
        </div>
        
        <div className="contact"><a href={pdf} download="resummeprathamesh.pdf">
           <button >Resume</button>
           </a>
        </div>
    </nav> 
  )
}

export default Navbar