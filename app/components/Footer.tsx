export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <a href="#hero" className="footer-logo">
              <i className="fas fa-code"></i>
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
              <i className="fas fa-envelope"></i>
              <a href="mailto:pauloh@duck.com">pauloh@duck.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+254794300699">+254 794 300 699</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Nakuru, Kenya</span>
            </div>
          </div>
          <div className="footer-column footer-connect">
            <h3>Stay Connected</h3>
            <p>
              Follow my latest work, crypto ideas, and business-focused builds.
            </p>
            <div className="footer-social-links">
              <a href="https://wa.me/+254794300699">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://github.com/pauloh349">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.x.com/Plumace1">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/thee_pauloh/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Paul Muiruri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
