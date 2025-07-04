import { useState } from 'react'
import { Link, useOutletContext } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  //const { cart, setCart } = useOutletContext();

  function cartCount(){
    return 
  }

  return (
    <>
      <header className = "navbar">
        <nav>
          <div className="navbar-left">
            <p className = "navbar-logo">Store</p>
          </div>
          <div className="navbar-center">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              
              
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
