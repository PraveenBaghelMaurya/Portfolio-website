import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Zettabyte plus</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            I led frontend development initiatives using React, which resulted in faster project delivery timeframes. I implemented responsive design principles to ensure cross-browser compatibility and a mobile-first approach. Additionally, I established code review processes and documentation standards, improving team efficiency. To further optimize development, I developed reusable components that significantly reduced development time.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Frontend Developer</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            I am currently upskilling in Full Stack Development at Coding Blocks, enhancing my expertise in both frontend and backend technologies to build scalable and efficient web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>learner</h4>
                <h5>coding block</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Skill Up time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
