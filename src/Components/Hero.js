import React from 'react'
import "../Components/Hero.css"
import MainImage from "../Images/new1.png"

const Hero = () => {
  return (
    <div className="container" id="hero">
        <div className="row">
            <div className="col-1">
                <h3>Welcome to</h3>
                <h1>FLOKI <span>POM</span></h1>
                <p>" The Floki On Pom Chain "<br></br>$POMF, Community-Driven Memecoin</p>
                <div className="btn-section">
                <a href="https://dexscreener.com/proofofmemes/0x0dfb85c4e3426e71a0e6b0d6a22f83b0dedfa2f6" target="__blank"><button className="btn-1">VIEW CHART</button></a>
                <a href="https://www.pomswap.org/#/swap?outputCurrency=0x3b13a9bb49316dbbe009947142f995bfa005ae36" target="__blank"><button className="btn-2">BUY NOW</button></a>
                </div>
            </div>
            <div className="col-2">
                <img src={MainImage}/>
            </div>
        </div>
    </div>
  )
}

export default Hero