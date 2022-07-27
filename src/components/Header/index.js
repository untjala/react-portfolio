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
        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio.</p>
      </div>
    </div>
  )
}

export default Header