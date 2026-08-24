export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <a href="#hero" className="footer-logo">
              <i className="fa-solid fa-code"></i>
              Paul<span>M.</span>
            </a>
            <p>
              Full-stack web, mobile, and cloud engineer with a passion for
              clean architecture, fast deployments, and business-ready
              solutions.
            </p>
          </div>
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:pauloh@duck.com">pauloh@duck.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+254794300699">+254794300699</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-map-marker-alt"></i>
              <span>Nakuru, Kenya</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Paul Muiruri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
