import React from "react";
import CV from "../../assets/md-mahbubur-rahman-resume_web.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
