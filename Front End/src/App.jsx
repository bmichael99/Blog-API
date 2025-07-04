import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section className = "hero">
            <p className = "hero-title">Something Inspirational</p>
            <Link to="/posts"><button>Explore Posts</button></Link>
        </section>

      

        <section className = "product-preview">
          
        </section>
      </main>
    </>
  )
}

export default App
