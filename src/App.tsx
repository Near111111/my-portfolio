import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillSet from "./components/SkillSet";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white font-sans">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SkillSet />
                <ContactForm />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <>
                <HeroSection />
                <SkillSet />
                <ContactForm />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
