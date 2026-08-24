import {
  FaCloud,
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

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: <FaReact />,
    category: "Mobile",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Language",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Language",
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine />,
    category: "Full Stack",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    category: "Database",
  },
  {
    name: "Firebase",
    icon: <SiGooglecloud />,
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "DevOps",
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
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
              <FaServer />
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
