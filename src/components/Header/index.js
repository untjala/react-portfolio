import React from 'react'
import './style.css'
import jala from '../Header/mountain-jala.png'
function Header() {
  return (
    <div className="row d-flex">
      <div className="header container-fluid">
        <h1 className="intro">Hi<span className="period">.</span></h1>
        <p> I'm <span className="my-name">Jala</span>. Welcome to my space.</p>
      </div>
      <div className="about-me">
        <img className="img-fluid" src={jala} alt="girl sitting on mountain"></img>
        <h1 className="about">About Me</h1>
        <p className="about-text">Hi there! I'm a full-stack web developer currently focused on JavaScript. I am also interested in game development through pixieJS and creating command line applications. As a developer, I am constantly looking at how things are implemented and asking how they can be smoother, faster, and more user friendly. I have a background in English and education and enjoy using these skills to express my creativity and to guide others on my team towards a common solution. </p>
      </div>
    </div>
  )
}

export default Header