import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Pauloh</h2>

        <div className="about-wrapper">
          {/* Introduction */}
          <div className="about-intro">
            <span className="about-label">A little about me</span>

            <h3>
              I build things with <span>code</span> and curiosity.
            </h3>

            <p>
              I&apos;m a Full-Stack Developer and Applied Computer Science
              student passionate about building useful web and mobile
              applications.
            </p>

            <p>
              I enjoy turning ideas into products, learning new technologies,
              and solving problems that challenge me to think differently.
            </p>

            <div className="about-interests">
              <span>Development</span>
              <span>Cloud</span>
              <span>Mobile</span>
              <span>Entrepreneurship</span>
            </div>
          </div>

          {/* Journey */}
          <div className="about-journey">
            <div className="journey-item">
              <div className="journey-icon">
                <FaBriefcase />
              </div>

              <div className="journey-content">
                <span>June 2026 - Present</span>
                <h3>Trancova Systems Ltd, Ghana</h3>
                <p>Internship</p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <FaBriefcase />
              </div>

              <div className="journey-content">
                <span>May 2025 - August 2025</span>
                <h3>Context Experts Agencies, Ruiru</h3>
                <p>Attachment</p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <FaBriefcase />
              </div>

              <div className="journey-content">
                <span>2022 — Present</span>
                <h3>Full-Stack Development</h3>
                <p>Building web, mobile, and cloud-based applications.</p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon">
                <FaGraduationCap />
              </div>

              <div className="journey-content">
                <span>23/08/2022 — April 2026</span>
                <h3>Egerton University, Njoro</h3>
                <p>BSc Applied Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
