import React from 'react';
import '../components/Nav.css'

function Navigation({ setPage }) {
return (
  <nav className="navbar navbar-nav-scroll d-flex">
    <div className="container-fluid sticky-top justify-content-end">
      <a className="nav-link mx-3" href="#home" onClick={() => setPage('home')}> Home</a>
      <a className="nav-link mx-3" href="#about" onClick={() => setPage('about')}> About</a>
      <a className="nav-link mx-3" href="#contact" onClick={() => setPage('contact')}> Contact</a>
      <a className="nav-link mx-3" href="#resume" onClick={() => setPage('resume')}> Resume</a>
    </div>
  </nav>
)
}

export default Navigation