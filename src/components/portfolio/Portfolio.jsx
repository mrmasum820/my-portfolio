import React, { useState } from 'react'
import './portfolio.css'


import IMG1 from '../../assets/images/portfolio/1.png'
import IMG2 from '../../assets/images/portfolio/2.png'
import IMG3 from '../../assets/images/portfolio/3.png'
import IMG4 from '../../assets/images/portfolio/4.png'
import IMG5 from '../../assets/images/portfolio/5.png'
import IMG6 from '../../assets/images/portfolio/6.png'
import IMG7 from '../../assets/images/portfolio/7.png'
import IMG8 from '../../assets/images/portfolio/8.png'
import IMG9 from '../../assets/images/portfolio/9.png'
import IMG10 from '../../assets/images/portfolio/10.png'
import IMG11 from '../../assets/images/portfolio/11.png'
import IMG12 from '../../assets/images/portfolio/12.png'
import IMG13 from '../../assets/images/portfolio/13.png'
import IMG14 from '../../assets/images/portfolio/14.png'
import IMG15 from '../../assets/images/portfolio/15.png'
import IMG16 from '../../assets/images/portfolio/16.png'
import IMG17 from '../../assets/images/portfolio/17.png'
import IMG18 from '../../assets/images/portfolio/18.png'


const data = [
  {
    id: 1,
    image: IMG6,
    title: 'zedtreeo',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://zedtreeo.com',
  },
  {
    id: 2,
    image: IMG1,
    title: 'zapfacil',
    gitStatus: 'Git Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://zapfacil.com',
  },
  {
    id: 3,
    image: IMG2,
    title: 'aaalocksmithmilwaukee',
    gitStatus: 'Git Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://aaalocksmithmilwaukee.com',
  },
  {
    id: 4,
    image: IMG3,
    title: 'aibotics',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://aibotics.digital',
  },
  {
    id: 5,
    image: IMG4,
    title: 'armygymnastics',
    gitStatus: 'Git Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://armygymnastics.com',
  },
  {
    id: 6,
    image: IMG5,
    title: 'calusamarketing',
    gitStatus: 'Git Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://calusamarketing.com',
  },
  {
    id: 7,
    image: IMG7,
    title: 'fxagora',
    gitStatus: 'Git Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://fxagora.onlineaprender.com',
  },
  {
    id: 8,
    image: IMG8,
    title: 'hive ive',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://hive-ive.com',
  },
  {
    id: 9,
    image: IMG9,
    title: 'katieaustin',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://katieaustin.tv',
  },
  {
    id: 10,
    image: IMG10,
    title: 'mlshomebuyers',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://mlshomebuyers-b601c8.ingress-baronn.ewp.live',
  },
  {
    id: 11,
    image: IMG11,
    title: 'moonbirdie',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://moonbirdie.com',
  },
  {
    id: 12,
    image: IMG12,
    title: 'onionlayers',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://onionlayers.ca',
  },
  {
    id: 13,
    image: IMG13,
    title: 'shanadanielle',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://shanadanielle.com',
  },
  {
    id: 14,
    image: IMG14,
    title: 'textforum',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://textforum.ch',
  },
  {
    id: 15,
    image: IMG15,
    title: 'trustbuildwindows',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://trustbuildwindows.com',
  },
  {
    id: 16,
    image: IMG16,
    title: 'voiptella',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'https://www.voiptella.com',
  },
  {
    id: 17,
    image: IMG17,
    title: 'glowmanagement',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'http://glowmanagement.de',
  },
  {
    id: 18,
    image: IMG18,
    title: 'localhelpmarketing',
    gitStatus: 'Github Link Unavailable',
    github: 'JavaScript:void(0)',
    demo: 'http://localhelpmarketing.com',
  }

]


const Portfolio = () => {

  const [visible, setVisible] = useState(2);

  const showLoadMore = () => {
    setVisible((prevValue) => prevValue + 2);
  }

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.slice(0, visible).map(({ id, image, title, github, demo, gitStatus }) => {
            return (

              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>{gitStatus}</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>

              </article>

            )
          })
        }
      </div>

      <div className="container loadMore">
        <a onClick={showLoadMore} className='btn'>Load More</a>
      </div>

    </section>
  )
}

export default Portfolio