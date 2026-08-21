export default function CryptoSection() {
  return (
    <section id="crypto">
      <div className="container">
        <h2>Crypto Trading & Blockchain</h2>
        <div className="crypto-content">
          <div className="crypto-intro">
            <p className="crypto-tagline">
              Beyond Code: Decentralized Digital Assets & Market Analytics
            </p>
            <p>
              I&apos;m not just building applications—I&apos;m exploring the future of
              finance through crypto trading and blockchain technology. With a
              deep interest in DeFi protocols, market analysis, and blockchain
              architecture, I combine technical expertise with market intuition
              to navigate the ever-evolving crypto landscape.
            </p>
          </div>

          <div className="crypto-grid">
            <div className="crypto-card">
              <div className="crypto-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3>Trading Strategy</h3>
              <p>
                Data-driven approach to analyzing market trends, identifying
                entry/exit points, and managing portfolio risk across multiple
                blockchain networks.
              </p>
              <div className="crypto-badge">Swing & Day Trading</div>
            </div>

            <div className="crypto-card">
              <div className="crypto-icon">
                <i className="fa-solid fa-cube"></i>
              </div>
              <h3>Blockchain Development</h3>
              <p>
                Understanding smart contracts, tokenomics, and decentralized
                protocols. Interest in Web3 integration and creating
                blockchain-powered applications.
              </p>
              <div className="crypto-badge">Smart Contracts & Web3</div>
            </div>

            <div className="crypto-card">
              <div className="crypto-icon">
                <i className="fa-solid fa-network-wired"></i>
              </div>
              <h3>DeFi Protocols</h3>
              <p>
                Exploring decentralized finance opportunities including yield
                farming, liquidity provision, and staking across leading
                blockchain platforms.
              </p>
              <div className="crypto-badge">DeFi & Staking</div>
            </div>

            <div className="crypto-card">
              <div className="crypto-icon">
                <i className="fa-solid fa-shield-alt"></i>
              </div>
              <h3>Risk Management</h3>
              <p>
                Implementing sophisticated portfolio management techniques,
                stop-loss strategies, and diversification across multiple
                blockchain assets.
              </p>
              <div className="crypto-badge">Portfolio Security</div>
            </div>
          </div>

          <div className="crypto-interests">
            <h3>Core Interests & Expertise</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <span>Market Analysis</span>
              </div>
              <div className="interest-item">
                <span>Blockchain Networks</span>
              </div>
              <div className="interest-item">
                <span>DeFi Innovation</span>
              </div>
              <div className="interest-item">
                <span>Wallet Security</span>
              </div>
              <div className="interest-item">
                <span>Web3 Integration</span>
              </div>
              <div className="interest-item">
                <span>Yield Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
