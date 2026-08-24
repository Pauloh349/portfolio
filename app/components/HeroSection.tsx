import Image from "next/image";
import {
  FaEnvelope,
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaLocationPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="hero" id="person">
      <div className="container hero-content">
        <div className="hero-text">
          <h3>Hello, I&apos;m</h3>

          <h1>Paul Muiruri</h1>

          <p>
            Paul Muiruri, aka Pauloh, is a Full-Stack Developer & Cloud
            Solutions Architect from Kenya, building scalable web and mobile
            applications and cloud infrastructure.
          </p>

          <div className="social-links">
            <a
              href="https://wa.me/+254794300699"
              aria-label="Contact Paul Muiruri on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp role="img" aria-label="WhatsApp" />
            </a>

            <a
              href="https://github.com/pauloh349"
              aria-label="Paul Muiruri on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub role="img" aria-label="GitHub" />
            </a>

            <a
              href="https://www.instagram.com/thee_pauloh/"
              aria-label="Paul Muiruri on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram role="img" aria-label="Instagram" />
            </a>

            <a
              href="https://play.google.com/store/apps/dev?id=7675065142046547897"
              aria-label="Paul Muiruri on Google Play Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay role="img" aria-label="Google Play Store" />
            </a>
          </div>

          <div className="hero-contact-cards">
            <a className="contact-card" href="mailto:pauloh@duck.com">
              <FaEnvelope role="img" aria-label="Email" />
              <span>pauloh@duck.com</span>
            </a>

            <a className="contact-card" href="tel:+254794300699">
              <FaPhone role="img" aria-label="Phone" />
              <span>+254 794 300 699</span>
            </a>

            <div className="contact-card contact-card--location">
              <FaLocationPin role="img" aria-label="Location" />
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
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
