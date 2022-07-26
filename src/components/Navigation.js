import React from 'react';

function Navigation ({setPage}) {
  return (
    <div>
      <a href="#home" onClick={() => setPage('home')}> Home</a>
      <a href="#about" onClick={() => setPage('about')}> About</a>
      <a href="#contact" onClick={() => setPage('contact')}> Contact</a>
      <a href="#resume" onClick={() => setPage('resume')}> Resume</a>
    </div>
  )
}

export default Navigation