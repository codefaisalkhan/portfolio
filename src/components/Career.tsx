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
                <h4>Bachelor's Degree</h4>
                <h5>University of Delhi</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed my Bachelor's degree from the University of Delhi.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA</h4>
                <h5>Manipal University Jaipur</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Currently pursuing Master of Computer Applications (MCA) to further enhance my technical expertise.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing & Upskilling</h4>
                <h5>Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a freelance full-stack developer, building practical solutions while continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
