import React, { useState } from "react";
import "./portfolio.css";

import IMG1 from "../../assets/images/portfolio/1.png";
import IMG2 from "../../assets/images/portfolio/2.png";
import IMG3 from "../../assets/images/portfolio/3.png";
import IMG4 from "../../assets/images/portfolio/4.png";
import IMG11 from "../../assets/images/portfolio/11.png";
import IMG12 from "../../assets/images/portfolio/12.png";
import IMG13 from "../../assets/images/portfolio/13.png";
import IMG14 from "../../assets/images/portfolio/14.png";
import IMG15 from "../../assets/images/portfolio/15.png";
import IMG16 from "../../assets/images/portfolio/16.png";
import IMG17 from "../../assets/images/portfolio/17.png";
import IMG18 from "../../assets/images/portfolio/18.png";
import IMG19 from "../../assets/images/portfolio/19.png";
import IMG20 from "../../assets/images/portfolio/20.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Coffee App",
    gitStatus: "Github Link Available",
    github: "https://github.com/mrmasum820/coffee-app-client",
    demo: "https://coffee-application.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "News App",
    gitStatus: "Github Link Available",
    github: "https://github.com/mrmasum820/newspaper-app-client",
    demo: "https://newspaper-application.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Job Portal App",
    gitStatus: "Github Link Available",
    github: "https://github.com/mrmasum820/job-portal",
    demo: "https://job-portal-rtk.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Online Learning UI",
    gitStatus: "Github Link Available",
    github: "https://github.com/mrmasum820/online-platform",
    demo: "https://online-teaching-platform.netlify.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "4studiocorner",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://4corners.studio/",
  },
  {
    id: 12,
    image: IMG12,
    title: "voiptella",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://www.voiptella.com",
  },
  {
    id: 13,
    image: IMG13,
    title: "catieaustin",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://katieaustin.tv",
  },
  {
    id: 14,
    image: IMG14,
    title: "bellastrada",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://bellastrada.shop/",
  },
  {
    id: 15,
    image: IMG15,
    title: "byenbeni baby",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://byenvenibaby.com/",
  },
  {
    id: 16,
    image: IMG16,
    title: "cepres university",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://ciu.edu.lr/",
  },
  {
    id: 17,
    image: IMG17,
    title: "thecofounder",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://thecofounder.co/",
  },
  {
    id: 18,
    image: IMG18,
    title: "trustbuild",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://trustbuildwindows.com",
  },
  {
    id: 19,
    image: IMG19,
    title: "visicapital",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://visicapital.co.id/",
  },

  {
    id: 20,
    image: IMG20,
    title: "west&associates",
    gitStatus: "Github Link Unavailable",
    github: "JavaScript:void(0)",
    demo: "https://westpatentlaw.com/",
  },
];

const Portfolio = () => {
  const [visible, setVisible] = useState(2);

  const showLoadMore = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data
          .slice(0, visible)
          .map(({ id, image, title, github, demo, gitStatus }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    {gitStatus}
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>

      <div className="container loadMore">
        <a onClick={showLoadMore} className="btn">
          Load More
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
