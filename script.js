// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Update active nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");

    // Close mobile menu if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileNavOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

// Form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const phoneNumber = document.getElementById("telephone").value;

  window.location.href = `mailto:muiruripaul3492@gmail.com?subject=Hi my name is ${name}, ${subject}&body=${message}, for more information you can reach me via ${phoneNumber}`;

  // Reset form
  contactForm.reset();
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileNavOverlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  // Change icon
  if (navLinks.classList.contains("active")) {
    mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close menu when clicking overlay
mobileNavOverlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  mobileNavOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
});

const featuredProjects = [
  {
    image: "./studyhub.png",
    "project-name": "Studyhub Ke",
    "project-description":
      "A comprehensive study platform for organizing learning resources and providing learners to access of past paper examinations accross Kenya.",
    "project-tech-tags": [
      "React Native",
      "Expo 54.0.20",
      "MongoDB",
      "Google Cloud",
      "MPesa Daraja API",
    ],
    "try-it-link":
      "https://play.google.com/store/apps/details?id=com.eapp.elis",
  },
  {
    image: "./studymate.png",
    "project-name": "Studex",
    "project-description":
      "An application for providing UoK with past papers for making academic journey smooth and enjoyable.",
    "project-tech-tags": ["React Native", "Expo 54.0.20", "Firebase"],
    "try-it-link": "",
  },
  {
    image: "./reclaima.png",
    "project-name": "Reclaima",
    "project-description": "Reconnecting you with your lost items",
    "project-tech-tags": ["Django", "Cloudinary"],
    "try-it-link": "https://reclaima.onrender.com/",
  },
];

const projectContainer = document.getElementById("projects-grid");

const projectHTML = featuredProjects
  .map((project) => {
    return `<div class="project-card">
            <div class="project-img">
              <img src="${project.image}" alt="${project["project-name"]}" />
            </div>
            <div class="project-content">
              <h3>${project["project-name"]}</h3>
              <p>
                ${project["project-description"]}
              </p>
              <div class="tech-tags">
              ${project["project-tech-tags"]
                .map((tag) => `<span class="tech-tag">${tag}</span>`)
                .join("")}
              </div>
              <div class="project-links">
                <a
                  href="${project["try-it-link"]}"
                  class="btn"
                  target="_blank"
                  >Try it</a
                >
              </div>
            </div>
          </div>`;
  })
  .join("");

projectContainer.innerHTML = projectHTML;

// Project card animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 150 * index);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".project-card").forEach((card) => {
  observer.observe(card);
});
