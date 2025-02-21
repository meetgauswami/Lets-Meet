import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const navbar = () => {



  return (
    <div>
        <div className="navbar">
            <div className="nav-video">
                <video src="/Assets/nav-bg3.mp4" autoPlay nocontrols muted loop className='nav-video'></video>
            </div>
            <div className="logo-name">
                <div className="logo">
                    <img src="/Assets/logo-gif.gif" alt="Let's Meet AI" />
                </div>
                <div className="name">Let's Meet AI</div>
            </div>
            <div className="menus">
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Us</Link>
                    {/* <Link to={"/contact"}>Contact Us</Link> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default navbar
