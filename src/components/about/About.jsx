import React from 'react'
import './about.css'
import ME from '../../assets/images/pic.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>15+ worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>100+ completed</small>
            </article>

          </div>

          <p>I am passionate web developer. I develop web applications, mobile applications and desktop applications. My core skill is based on JavaScript. Now I want to
            join a high throughput developing team to learn about robustness and scalability.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>

    </section>
  )
}

export default About