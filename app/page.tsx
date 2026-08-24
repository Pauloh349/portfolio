import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import CryptoSection from "./components/CryptoSection";
import SkillsSection from "./components/SkillsSection";
import CertificatesSection from "./components/CertificatesSection";
import BusinessSection from "./components/BusinessSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Paul Muiruri",
    alternateName: "Pauloh",
    jobTitle: "Full-Stack Developer and Cloud Solutions Architect",
    email: "mailto:pauloh@duck.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nakuru",
      addressCountry: "KE",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Egerton University" },
    sameAs: [
      "https://github.com/pauloh349",
      "https://www.linkedin.com/in/paul-muiruri-34b734338",
      "https://www.x.com/Plumace1",
      "https://www.instagram.com/thee_pauloh/",
    ],
    knowsAbout: [
      "React",
      "React Native",
      "Node.js",
      "Firebase",
      "Google Cloud",
      "Cloud Architecture",
    ],
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <NavBar />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <CryptoSection />
      <BusinessSection />
      <Footer />
    </div>
  );
}
