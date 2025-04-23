import React, { useState, useEffect } from "react";

const Services: React.FC = () => {
  const [visibleServices, setVisibleServices] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleServices((prev) => {
        if (prev < 6) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 300); // Adjust the delay as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full py-16 bg-gray-900 px-4 sm:px-8">
      <h2 className="text-4xl font-extrabold text-center text-red-500 mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform ${
              index < visibleServices
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-red-500 text-4xl mb-4">
              <i
                className={`fas ${
                  index === 0
                    ? "fa-code"
                    : index === 1
                    ? "fa-mobile-alt"
                    : index === 2
                    ? "fa-paint-brush"
                    : index === 3
                    ? "fa-camera"
                    : index === 4
                    ? "fa-microchip"
                    : "fa-vr-cardboard"
                }`}
              ></i>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {index === 0
                ? "Web Development"
                : index === 1
                ? "Mobile App Development"
                : index === 2
                ? "UI/UX Design"
                : index === 3
                ? "Computer Vision"
                : index === 4
                ? "IoT Solutions"
                : "Augmented Reality"}
            </h3>
            <p className="text-gray-400">
              {index === 0
                ? "We create responsive and modern websites tailored to your needs."
                : index === 1
                ? "Build high-quality mobile applications for Android and iOS platforms."
                : index === 2
                ? "Design user-friendly interfaces and experiences for your applications."
                : index === 3
                ? "Implement advanced computer vision solutions for various industries."
                : index === 4
                ? "Develop innovative IoT solutions to connect and automate devices."
                : "Create immersive augmented reality experiences for various applications."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
