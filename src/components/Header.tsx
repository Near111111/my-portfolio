import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/services");
  };

  return (
    <header className="flex flex-wrap justify-between items-center p-6 bg-gray-800">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 w-10 animate-spin-slow" />
        <h1 className="text-2xl font-bold text-red-500">Near</h1>
      </div>
      <nav>
        <ul className="flex flex-wrap space-x-4 sm:space-x-6">
          <li>
            <a
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={handleAboutClick}
              className="hover:text-red-500 cursor-pointer"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100); // Delay to ensure navigation completes
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/about")}
              className="hover:text-red-500 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100); // Delay to ensure navigation completes
              }}
              className="hover:text-red-500 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
