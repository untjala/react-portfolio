import React from 'react'
import './style.css'
import jala from '../Header/mountain-jala.png'
function Header () {
  return (
    <>
    <div className="header">
    <h1 className="intro">Hi.</h1>
    <p> I'm <span className="my-name">Jala</span>. Welcome to my space.</p>
    </div>
    <div className="about-me">
    <div className="d-flex justify-content-center">
      <img className="img-fluid" src={jala} alt="girl sitting on mountain"></img>
    </div>
    <section>
    <h1 className="about">About Me</h1>
    <p className="about-text">lorem ipsum test test test</p>
    </section>
  </div>
    </>
  )
}

export default Header