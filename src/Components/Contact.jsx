import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-8 pb-12 bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Entre em Contato
      </h2>

      <div className="max-w-xs md:max-w-sm mx-auto p-6 border border-gray-700 rounded-lg">
        <p className="text-white text-lg mb-6 text-center">
          Entre em contato e vamos conversar sobre como posso agregar ao seu time
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
            href="mailto:victorportela1010@gmail.com"
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
        
      </div>
    </section>
  );
};

export default Contact;
