import React, { useState } from 'react'
import "../Components/Navbar.css"
import MainImage from "../Images/new1.png"
import {Link} from "react-scroll"
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="navbar">
        <div className="nav-logo">
          <img src={MainImage}/>
          FLOKI <span>POM</span>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="hero" spy={true} smooth={true} offset={0} duration={200}>HOME</Link>
            <Link to="about"spy={true} smooth={true} offset={0} duration={200}>ABOUT</Link>
            <Link to="tokenomics"spy={true} smooth={true} offset={0} duration={200}>TOKENOMICS</Link>
            <Link to="howtobuy"spy={true} smooth={true} offset={0} duration={200}>HOW TO BUY</Link>
            <Link to="roadmap"spy={true} smooth={true} offset={0} duration={200}>ROADMAP</Link>
        </div>
        <div className="telegram">
        <a href="https://t.me/flokipom" target="__blank"><button>JOIN TELEGRAM</button></a>
          </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen (!isOpen)}
        >


            <div className="bars"></div>
        </div>
    </div>
  )
}

export default Navbar