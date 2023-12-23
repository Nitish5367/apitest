import React from 'react'
import { Link } from 'react-router-dom'
 import './Nav.css'
const Nav = () => {
  return (
    <nav>
     <Link to="/">Aboutme</Link>
     <Link to="/edu">Education</Link>
     <Link to="/inter">Interest</Link>
     <Link to="/proj">Project</Link>
    </nav>
  )
}

export default Nav