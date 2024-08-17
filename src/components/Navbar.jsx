import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const navbar = () => {



  return (
    <div>
        <div className="navbar">
            <div className="nav-video">
                <img src="https://i.postimg.cc/MGJ8mkSJ/nav-bg3-gif.gif" autoPlay nocontrols muted loop className='nav-video'></img>
            </div>
            <div className="logo-name">
                <div className="logo">
                    <img src="https://i.postimg.cc/Bb4JgY4V/logo-gif.gif" alt="grfgr" />
                </div>
                <div className="name">Let's Meet</div>
            </div>
            <div className="menus">
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About Us</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default navbar
