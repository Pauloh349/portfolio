import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h3>Hello, I&apos;m</h3>
          <h1>Paul Muiruri | Pauloh</h1>
          <p>
            Full-Stack Developer & Cloud Solutions Architect with expertise in
            creating scalable web and mobile applications and cloud
            infrastructure.
          </p>
          <div className="social-links">
            <a href="https://wa.me/+254794300699">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://github.com/pauloh349">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/paul-muiruri-34b734338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.x.com/Plumace1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/thee_pauloh/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="hero-contact-cards">
            <a className="contact-card" href="mailto:pauloh@duck.com">
              <i className="fas fa-envelope"></i>
              <span>pauloh@duck.com</span>
            </a>
            <a className="contact-card" href="tel:+254794300699">
              <i className="fas fa-phone"></i>
              <span>+254 794 300 699</span>
            </a>
            <div className="contact-card contact-card--location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Nakuru, Kenya</span>
            </div>
          </div>
          <div className="hero-btns">
            {/* <a href="#footer" className="btn">Connect Below</a> */}
            <a
              href="https://drive.google.com/file/d/1oGrDWxvMoBeYmGymuMSekQxNiZeQhhEf/view?usp=drive_link"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-container">
            <Image
              src="/me.webp"
              alt="Paul Muiruri"
              width={300}
              height={300}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
