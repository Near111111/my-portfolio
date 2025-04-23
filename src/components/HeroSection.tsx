import React, { useState } from "react";
import { motion } from "framer-motion";
import moodflixImage from "./images/projects/moodflix.jpg";
import amazonCopyImage from "./images/projects/amazon-copy.png";
import transpoImage from "./images/projects/transpo.png";
import virtualMouseImage from "./images/projects/virtual-mouse.jpg";
import yoloDetectionImage from "./images/projects/yolo-detection.png";

const HeroSection: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Moodflix",
      image: moodflixImage,
      link: "https://moodflix-sandy.vercel.app",
    },
    {
      id: 2,
      name: "Amazon Copy",
      image: amazonCopyImage,
      link: "https://github.com/Near111111/amazon-copy",
    },
    {
      id: 3,
      name: "Transport Management",
      image: transpoImage,
      link: "https://github.com/Near111111/transport_management",
    },
    {
      id: 4,
      name: "Virtual Mouse",
      image: virtualMouseImage,
      link: "https://github.com/Near111111/final-AR",
    },
    {
      id: 5,
      name: "YOLO Detection",
      image: yoloDetectionImage,
      link: "https://github.com/Near111111/70-percent-yolo",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm a Full Stack Developer
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I build amazing web applications using modern tools & frameworks.
      </motion.p>
      <motion.button
        className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-600"
        onClick={() => setShowCarousel(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Projects
      </motion.button>

      {showCarousel && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 bg-opacity-90 p-6 rounded-lg max-w-3xl w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h3>
            <motion.h4
              className="text-lg font-semibold mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {projects[currentIndex].name}
            </motion.h4>
            <motion.div
              className="flex flex-col items-center space-y-6 w-full max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="overflow-hidden rounded-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].name}
                    className="w-full h-64 object-cover"
                  />
                </a>
              </motion.div>
              <div className="flex justify-between items-center w-full px-4">
                <motion.button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  whileHover={{ scale: 1.1 }}
                >
                  &#8249;
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                  whileHover={{ scale: 1.1 }}
                >
                  &#8250;
                </motion.button>
              </div>
            </motion.div>
            <motion.p
              className="text-center text-red-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {projects[currentIndex].link}
              </a>
            </motion.p>
            <motion.button
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setShowCarousel(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default HeroSection;
