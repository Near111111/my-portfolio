import React, { useEffect, useState, useRef } from "react";
import {
  FaGitAlt,
  FaAppStore,
  FaCode,
  FaLaptopCode,
  FaAndroid,
  FaBriefcase,
} from "react-icons/fa";

const skills = [
  {
    title: "Git Version Control",
    description: "Manage code efficiently with Git.",
    icon: <FaGitAlt />,
  },
  {
    title: "App Design",
    description: "Design user-friendly and modern applications.",
    icon: <FaAppStore />,
  },
  {
    title: "Back-end Development",
    description: "Build robust server-side applications.",
    icon: <FaCode />,
  },
  {
    title: "Web Development",
    description: "Create responsive and dynamic websites.",
    icon: <FaLaptopCode />,
  },
  {
    title: "App Development",
    description: "Build a responsive android app.",
    icon: <FaAndroid />,
  },
  {
    title: "Freelancing",
    description: "Deliver projects on time with quality.",
    icon: <FaBriefcase />,
  },
];

const SkillSet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setVisibleSkills((prev) => {
          if (prev < skills.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 300); // Adjust the delay as needed

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 bg-gray-800 px-4 sm:px-8"
    >
      <h3 className="text-3xl font-bold text-center text-red-500 mb-8">
        Skill-Set
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center text-center ${
              index < visibleSkills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-red-500 text-2xl mb-4">{skill.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;
