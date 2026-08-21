export default function BusinessSection() {
  return (
    <section id="business">
      <div className="container">
        <h2>Business, Stocks & Techpreneurship</h2>
        <div className="business-content">
          <div className="business-intro">
            <p className="business-tagline">
              Building businesses, investing in growth, and shaping tomorrow&apos;s
              tech leaders.
            </p>
            <p>
              I blend market insight with entrepreneurial ambition: trading
              shares, evaluating startups, and learning business strategy to
              bring tech innovations to market. This section captures the
              mindset behind my business build and investment journey.
            </p>
          </div>

          <div className="business-grid">
            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3>Techpreneurship</h3>
              <p>
              Creating products with a founder&apos;s perspective, from ideation to
                go-to-market strategy and revenue-driven growth.
              </p>
              <div className="business-badge">Founder Mindset</div>
            </div>

            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <h3>Stocks & Shares</h3>
              <p>
                Investing in companies that drive innovation and long-term
                value, balancing growth potential with disciplined risk
                management.
              </p>
              <div className="business-badge">Equities & Value</div>
            </div>

            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Business Learning</h3>
              <p>
                Continuously learning frameworks in strategy, finance,
                leadership, and product-market fit to build sustainable
                technology ventures.
              </p>
              <div className="business-badge">Strategy & Growth</div>
            </div>

            <div className="business-card">
              <div className="business-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3>Market Insight</h3>
              <p>
                Tracking industry shifts, customer behavior, and competitive
                landscapes to identify high-potential opportunities.
              </p>
              <div className="business-badge">Opportunity Radar</div>
            </div>
          </div>

          <div className="business-highlights">
            <h3>Business Focus Areas</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <span>Financial Analysis</span>
              </div>
              <div className="highlight-item">
                <span>Startup Growth</span>
              </div>
              <div className="highlight-item">
                <span>Product Leadership</span>
              </div>
              <div className="highlight-item">
                <span>Corporate Strategy</span>
              </div>
              <div className="highlight-item">
                <span>Sustainable Scaling</span>
              </div>
              <div className="highlight-item">
                <span>Market Navigation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
