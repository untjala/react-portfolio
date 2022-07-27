import React from 'react';
import './style.css'

function Navigation({ setPage }) {
return (
  <nav className="navbar navbar-nav-scroll d-flex">
    <div className="container-fluid fixed-top justify-content-end">
      <a className="nav-link mx-3" href="#home" onClick={() => setPage('home')}> Home</a>
      <a className="nav-link mx-3" href="#portfolio" onClick={() => setPage('portfolio')}> Portfolio</a>
      <a className="nav-link mx-3" href="#contact" onClick={() => setPage('contact')}> Contact</a>
      <a className="nav-link mx-3" href="#resume" onClick={() => setPage('resume')}> Resume</a>
    </div>
  </nav>
)
}

export default Navigation