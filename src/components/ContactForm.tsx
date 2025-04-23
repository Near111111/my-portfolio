import React from "react";
import emailjs from "emailjs-com";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

const ContactForm: React.FC = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_cncy353", // Replace with your EmailJS service ID
        "template_6kdysy3", // Replace with your EmailJS template ID
        form,
        "943x3mtlqXWkMa_Ju" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );

    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-start justify-between">
        <div className="md:w-2/3 sm:w-full sm:ml-0 md:ml-8">
          <div className="flex justify-center md:justify-center items-center mb-6 text-white text-3xl">
            <h3 className="text-3xl font-bold text-red-500">Connect with me</h3>
          </div>
          <form className="max-w-lg mx-auto space-y-6" onSubmit={sendEmail}>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-6 md:ml-8 md:w-1/3 mt-4 text-5xl sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
          <a
            href="https://www.facebook.com/015jomar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 flex flex-col items-center"
          >
            <FaFacebook />
            <span className="text-sm">Jomar Aniñon</span>
          </a>
          <a
            href="https://www.instagram.com/itsyaboy.near/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 flex flex-col items-center"
          >
            <FaInstagram />
            <span className="text-sm">@itsyaboy.near</span>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 flex flex-col items-center"
          >
            <FaTelegram />
            <span className="text-sm">Jomar Aniñon</span>
          </a>
          <a
            href="mailto:jomarmerej@gmail.com"
            className="hover:text-red-500 flex flex-col items-center"
          >
            <FaEnvelope />
            <span className="text-sm">joamrmerej@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
