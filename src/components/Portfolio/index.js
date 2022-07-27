import React from 'react'
import './style.css'
import food from './assets/food.png'
import word from './assets/word.png'
import team from './assets/team.png'
function Portfolio() {
  return (
    <>
      <header className="portfolio-header">
        <h1> My Work </h1>
      </header>
      <section className='portfolio-cards card-column'>
        <div className='food card-body col-sm-10 h-50 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://pacific-everglades-44013.herokuapp.com'>
          <img className="food card card-img" src={food} alt="8bit game"/>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/untjala/food-run'>
          </a>
        </div>
        <div className='card-body col-sm-10 h-50 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://raydover.github.io/project-01/'>
              <img className="card card-img" src={word} alt="gif finding site demo"/>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/raydover/project-01'>
          </a>
        </div>
        <div className='card-body col-sm-10 h-50 text-center team'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/untjala/team-profile-generator'>
              <img className="card card-img" src={team} alt="cards for team members"/>
          </a>
        </div>
      </section>
    </>
  )
}

export default Portfolio