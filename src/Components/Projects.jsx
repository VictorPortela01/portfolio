import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Disney from "../Components/images/image.png";
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Projects I've built to sharpen my skills and showcase my abilities
          </p>
        </div>
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* imagem */}
            <a href="https://disney-clone-victorportela01.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                className="w-full h-48 object-cover hover:scale-99 transition-all duration-150 ease-in"
                src={Disney}
                alt="Disney Clone"
              />
            </a>

            <div className="p-6">
              <a
                href="https://disney-clone-victorportela01.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-semibold mb-2 hover:underline underline-offset-1">Disney Clone</h3>
              </a>
              <p className="text-gray-600 mb-4">
                Disney clone with TailwindCSS and React
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 bg-blue-100 text-blue-600 text-sm rounded-full hover:scale-110 cursor-pointer">
                  React
                </span>
                <span className="px-3 bg-cyan-100 text-cyan-600 text-sm rounded-full hover:scale-110 cursor-pointer">
                  TailwindCSS
                </span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-400 transition-colors">
                  <a
                    href="https://disney-clone-victorportela01.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="flex items-center gap-2 justify-center">
                      <CiShare1 className="w-5 h-5" /> Live Demo
                    </i>
                  </a>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <i>
                    <a
                      href="https://github.com/VictorPortela01/disney-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
