import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-8 pb-12 bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Let's Connect
      </h2>

      <div className="max-w-xs md:max-w-sm mx-auto p-6 border border-gray-700 rounded-lg">
        <p className="text-white text-lg mb-6 text-center">
          Ready to start my journey as a Frontend Developer. Let's build
          something amazing together!
        </p>

        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/victorportelav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-full flex justify-center bg-indigo-500 hover:bg-indigo-600 p-4 rounded-lg transition-colors cursor-pointer">
              <FaLinkedin className="text-white text-xl" />
            </span>
          </a>

          <a
            href="https://github.com/VictorPortela01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-full flex justify-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors cursor-pointer">
              <FaGithub className="text-white text-xl" />
            </span>
          </a>

          <a
            href="mailto:victorportela01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-full flex justify-center bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors cursor-pointer">
              <FaEnvelope className="text-white text-xl" />
            </span>
          </a>

          <a
            href="https://wa.me/5588992890633"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-full flex justify-center bg-green-600 hover:bg-green-700 p-4 rounded-lg transition-colors cursor-pointer">
              <FaWhatsapp className="text-white text-xl" />
            </span>
          </a>
        </div>
        <button className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition-colors">
          <IoIosSend className="mr-2 w-5 h-5 inline-block" />
          <a href="mailto:victorportela1010@gmail.com?subject=Contato%20pelo%20Portfólio&body=Olá%20Victor!">
            Send Message
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
