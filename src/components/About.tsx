import React from "react";
import { motion } from "framer-motion";
import meImage from "./images/me.jpg";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-16 bg-gray-900 px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
        variants={itemVariants}
      >
        <img
          src={meImage}
          alt="Profile"
          className="rounded-lg shadow-lg w-3/4 md:w-4/5 lg:w-3/4"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 text-white md:pl-8"
        variants={itemVariants}
      >
        <h2 className="text-green-400 text-xl font-semibold mb-4">Who am I?</h2>
        <h3 className="text-3xl font-bold mb-6">
          I'm Jomar Aniñon, a Full stack Web Developer
        </h3>
        <p className="text-gray-400 mb-6">
          I'm a passionate full-stack web developer with a knack for creating
          dynamic and responsive web applications. I enjoy solving complex
          problems and continuously learning new technologies to improve my
          craft.
        </p>
        <ul className="text-gray-400 mb-6 space-y-2">
          <li>
            <strong>Name:</strong> Jomar Aniñon
          </li>
          <li>
            <strong>Age:</strong> 21
          </li>
          <li>
            <strong>From:</strong> Tanza 2, Navotas City
          </li>
          <li>
            <strong>Email:</strong> jomarmerej@gmail.com
          </li>
        </ul>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600">
          Download CV
        </button>
      </motion.div>
    </motion.section>
  );
};

export default About;
