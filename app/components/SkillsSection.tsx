export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>
              <i className="fa-solid fa-laptop-code"></i> Frontend
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="skill-info">
                  <h4>React & React Native</h4>
                  <p>Advanced component architecture</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-brands fa-js"></i>
                </div>
                <div className="skill-info">
                  <h4>JavaScript & TypeScript</h4>
                  <p>ES6+, modern frameworks</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
                <div className="skill-info">
                  <h4>CSS & Preprocessors</h4>
                  <p>SASS, Tailwind, responsive design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <i className="fa-solid fa-server"></i> Backend
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <div className="skill-info">
                  <h4>Node.js & Express</h4>
                  <p>REST APIs, microservices</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <div className="skill-info">
                  <h4>Databases</h4>
                  <p>MongoDB, Firebase</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>
              <i className="fa-solid fa-cloud"></i> Cloud & DevOps
            </h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-brands fa-google"></i>
                </div>
                <div className="skill-info">
                  <h4>Google Cloud</h4>
                  <p>Firebase, Cloud Functions</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">
                  <i className="fa-brands fa-docker"></i>
                </div>
                <div className="skill-info">
                  <h4>Containerization</h4>
                  <p>Docker, Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
