import { FaChartLine, FaCube, FaNetworkWired } from "react-icons/fa6";

export default function CryptoSection() {
  return (
    <section id="crypto">
      <div className="container">
        <h2>Crypto & Blockchain</h2>

        <div className="crypto-content">
          <div className="crypto-intro">
            <p className="crypto-tagline">
              Exploring Digital Assets, DeFi & Web3
            </p>

            <p>
              I&apos;m interested in the intersection of technology and
              decentralized finance, exploring crypto markets, blockchain
              systems, and emerging Web3 technologies.
            </p>
          </div>

          <div className="crypto-grid">
            <div className="crypto-card">
              <div className="crypto-icon">
                <FaChartLine role="img" aria-label="Crypto Trading" />
              </div>
              <h3>Crypto Trading</h3>
              <p>Market analysis, trading strategies, and risk management.</p>
            </div>

            <div className="crypto-card">
              <div className="crypto-icon">
                <FaCube role="img" aria-label="Blockchain" />
              </div>
              <h3>Blockchain</h3>
              <p>
                Exploring smart contracts, tokenomics, and Web3 applications.
              </p>
            </div>

            <div className="crypto-card">
              <div className="crypto-icon">
                <FaNetworkWired role="img" aria-label="DeFi" />
              </div>
              <h3>DeFi</h3>
              <p>
                Learning about decentralized finance, staking, and liquidity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
