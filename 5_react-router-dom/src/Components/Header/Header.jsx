import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
      <header>
        <div className="logo">MyLogo</div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="search">
            <input type="text" placeholder="Search..." />
            <button type="submit">Go</button>
        </div>
    </header>
    </>
  )
}

export default Header