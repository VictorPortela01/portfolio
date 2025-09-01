import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">Victor</div>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-8">
        <Link to="about" smooth={true} duration={500}>
          <span className="text-gray-600 hover:text-[#6366f1] transition-colors cursor-pointer">About</span>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <span className="text-gray-600 hover:text-[#6366f1] transition-colors cursor-pointer">Skills</span>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <span className="text-gray-600 hover:text-[#6366f1] transition-colors cursor-pointer">Projects</span>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <span className="text-gray-600 hover:text-[#6366f1] transition-colors cursor-pointer">Contact</span>
        </Link>
      </div>

      {/* Botão hamburguer */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 
            0 32 14.3 32 32s-14.3 32-32 32H32C14.3 
            128 0 113.7 0 96zM0 256c0-17.7 14.3-32 
            32-32H416c17.7 0 32 14.3 32 32s-14.3 
            32-32 32H32c-17.7 0-32-14.3-32-32zM448 
            416c0 17.7-14.3 32-32 32H32c-17.7 
            0-32-14.3-32-32s14.3-32 32-32H416c17.7 
            0 32 14.3 32 32z"/>
        </svg>
      </button>

      {/* Menu Mobile */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 md:hidden">
          <span className="text-gray-600 hover:text-[#6366f1] cursor-pointer">About</span>
          <span className="text-gray-600 hover:text-[#6366f1] cursor-pointer">Skills</span>
          <span className="text-gray-600 hover:text-[#6366f1] cursor-pointer">Projects</span>
          <span className="text-gray-600 hover:text-[#6366f1] cursor-pointer">Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Header;
