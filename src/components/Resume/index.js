import React from 'react'
import './style.css'
function Resume() {
  return (
    <div className="resume-page">
    <header className='header'>
    </header>
    <section className='section'>
      <h2> Skills </h2>
      <ul className="front-end"> 
      <h3> Front End Skills </h3>
      <li>HTML </li>
      <li>CSS</li>
      <li>JavaScript </li>
      <li> React </li>
      <li>Bootstrap</li>
      </ul>
      <ul className="back-end"> 
      <h3> Back End Skills </h3>
      <li>Node.js </li>
      <li>Express</li>
      <li>MySQL/Sequalize </li>
      <li>MongoDB/Mongoose </li>
      <li>RESTful API's</li>
      <li>Apollo GraphQL</li>
      </ul>
      <a className="resume" href={require('./unterreiner-jala.pdf')} download>Download my resume! </a>
    </section>
    </div>
  )
}

export default Resume