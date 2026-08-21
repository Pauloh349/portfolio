import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="person">
      <div className="container hero-content">
        <div className="hero-text">
          <h3>Hello, I&apos;m</h3>

          <h1>Paul Muiruri</h1>

          <p>
            Paul Muiruri, also known as Pauloh, is a Full-Stack Developer &
            Cloud Solutions Architect from Kenya, building scalable web and
            mobile applications and cloud infrastructure.
          </p>

          <div className="social-links">
            <a
              href="https://wa.me/+254794300699"
              aria-label="Contact Paul Muiruri on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://github.com/pauloh349"
              aria-label="Paul Muiruri on GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/paul-muiruri-34b734338"
              aria-label="Paul Muiruri on LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://www.x.com/Plumace1" aria-label="Paul Muiruri on X">
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.instagram.com/thee_pauloh/"
              aria-label="Paul Muiruri on Instagram"
            >
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
              src="/paul-muiruri.webp"
              alt="Paul Njuguna Muiruri (Paul Muiruri / Pauloh), Full-Stack Developer"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
