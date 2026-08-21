"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    image: "/studyhub.webp",
    name: "Studyhub Ke",
    description:
      "A comprehensive study platform for organizing learning resources and giving learners access to past examination papers across Kenya.",
    technologies: [
      "React Native CLI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Firestore",
      "Google Cloud Run",
      "MPesa Daraja API",
    ],
    href: "https://play.google.com/store/apps/details?id=com.eapp.elis",
  },
  {
    image: "/tvethub.webp",
    name: "Tvethub",
    description:
      "An application that provides TVET students with study content, from Tutorials, design templates, past papers.",
    technologies: ["React Native CLI", "Google Cloud"],
    href : "https://play.google.com/store/apps/details?id=com.tvethub"
  },
  {
    image: "/Reclaima.webp",
    name: "Reclaima",
    description: "Reconnecting you with your lost items.",
    technologies: ["React", "Node.js", "SSE", "Render", "MongoDB"],
    href: "http://reclaima-final-year-project.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), 150 * index);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);
  return (
    <article ref={ref} className={`project-card${visible ? " visible" : ""}`}>
      <div className="project-img">
        <Image
          src={project.image}
          alt={`${project.name} project preview`}
          width={640}
          height={440}
          sizes="(max-width: 768px) 94vw, 400px"
        />
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div
          className="tech-tags"
          aria-label={`Technologies used for ${project.name}`}
        >
          {project.technologies.map((technology) => (
            <span className="tech-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.href ? (
            <a
              href={project.href}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try it<span className="sr-only">: {project.name}</span>
            </a>
          ) : (
            <span className="btn btn-disabled" aria-disabled="true">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
