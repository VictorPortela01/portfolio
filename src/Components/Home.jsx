import { Link } from "react-scroll";
import foto from "../Components/images/perfil.jpeg";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../public/Curriculo_Victor_Portela.pdf";
    link.download = "Curriculo_Victor_Portela.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="bg-[#f3f4f6] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          {/* Saudação */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">👋</span>
            <span className="text-indigo-600 font-medium">Oi, Eu sou Victor</span>
          </div>

          {/* Título */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Desenvolvedor <span className="text-indigo-500">Fullstack</span>
          </h1>

          {/* Descrição */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Estudante de Análise e Desenvolvimento de Sistemas. Desenvolvedor Fullstack em formação, criando e integrando APIs RESTful (Node.js, MongoDB) com interfaces de usuário dinâmicas (React).
          </p>

          {/* Botões */}
          <div className="flex gap-4">
            <Link to="projects" smooth={true} duration={500}>
              <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors font-medium cursor-pointer">
                View Projects
              </button>
            </Link>

            <button
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-white transition-colors font-medium cursor-pointer"
              onClick={handleDownload}
            >
              <a href="/Curriculo_Victor_Portela.pdf" download>
                Download CV
              </a>
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Foto com borda */}
            <div className="w-80 h-80 rounded-full border-15 border-indigo-500 flex items-center justify-center">
              <img
                className="w-72 h-72 rounded-full object-cover"
                src={foto}
                alt="developer portrait"
              />
            </div>

            {/* Card do ícone */}
            <div className="absolute -bottom-2 -right-3 bg-white p-4 rounded-lg shadow-lg">
              <svg
                className="w-6 h-6 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
