import React from 'react'
import './style.css'
function Resume() {
  return (
    <div className="resume-page">
    <header className='header'>
    </header>
    <section className='section'>
      <h2> Interested in hiring me? </h2>
      <a className="resume" href={require('./unterreiner-jala.pdf')} download>Download my resume! </a>
    </section>
    </div>
  )
}

export default Resume