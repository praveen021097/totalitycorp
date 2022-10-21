import React from 'react'
import "./navbar.css"
import openSea from "./images/openSea.png"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className='logoSection'>
        <img src={openSea} alt="logo not loaded" />
      </div>
      <div className='searchSection'></div>
      <div className='menuTabs'></div>
    </div>
  )
}

export default Navbar
