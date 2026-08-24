export default function BusinessSection() {
  return (
    <section id="business">
      <div className="container">
        <h2>Business & Tech Entrepreneurship</h2>

        <div className="business-content">
          <div className="business-intro">
            <p className="business-tagline">
              Building ideas, exploring opportunities, and learning what makes
              technology businesses grow.
            </p>

            <p>
              I&apos;m interested in entrepreneurship, investing, and business
              strategy, with a focus on turning technology ideas into useful
              products and sustainable ventures.
            </p>
          </div>

          <div className="business-grid">
            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3>Tech Entrepreneurship</h3>
              <p>
                Building digital products and exploring ideas from concept to
                market.
              </p>
            </div>

            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <h3>Investing</h3>
              <p>
                Following companies, markets, and opportunities for long-term
                growth.
              </p>
            </div>

            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Business Strategy</h3>
              <p>
                Learning about product growth, finance, leadership, and
                sustainable businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
