import {
  FaCss3,
  FaDatabase,
  FaDocker,
  FaJs,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { SiGooglecloud, SiTypescript } from "react-icons/si";
import { ReactElement } from "react";

// ✅ Helper function to add accessibility to icons
const createAccessibleIcon = (Icon: any, label: string): ReactElement => {
  return <Icon role="img" aria-label={label} />;
};

const skills = [
  {
    name: "React",
    icon: createAccessibleIcon(FaReact, "React"),
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: createAccessibleIcon(FaReact, "React Native"),
    category: "Mobile",
  },
  {
    name: "TypeScript",
    icon: createAccessibleIcon(SiTypescript, "TypeScript"),
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: createAccessibleIcon(FaJs, "JavaScript"),
    category: "Language",
  },
  {
    name: "Next.js",
    icon: createAccessibleIcon(RiNextjsLine, "Next.js"),
    category: "Full Stack",
  },
  {
    name: "Node.js",
    icon: createAccessibleIcon(FaNodeJs, "Node.js"),
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: createAccessibleIcon(FaDatabase, "MongoDB"),
    category: "Database",
  },
  {
    name: "Firebase",
    icon: createAccessibleIcon(SiGooglecloud, "Firebase"),
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: createAccessibleIcon(FaDocker, "Docker"),
    category: "DevOps",
  },
  {
    name: "CSS",
    icon: createAccessibleIcon(FaCss3, "CSS"),
    category: "Frontend",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>

        <div className="skills-showcase">
          <div className="skills-center">
            <div className="skills-center-icon">
              <FaServer role="img" aria-label="Server" />
            </div>

            <span>Full Stack</span>
            <strong>Developer</strong>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="tech-item" key={skill.name}>
                <div className="tech-icon">{skill.icon}</div>

                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
