import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { SiMongodb, SiTypescript, SiExpress } from "react-icons/si";

import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600">
            Tecnologias que utilizo para construir aplicações web de ponta a
            ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillsCard
            icon={<FaReact className="w-8 h-8 text-blue-500" />}
            title="React"
            description="Construção de interfaces de usuário dinâmicas e interativas."
          />

          <SkillsCard
            icon={<RiTailwindCssFill className="w-8 h-8 text-teal-500" />}
            title="TailwindCSS"
            description="Framework CSS utility-first para desenvolvimento rápido de UIs."
          />

          <SkillsCard
            icon={<SiTypescript className="w-8 h-8 text-blue-700" />}
            title="Typescript"
            description="Superset do JavaScript que adiciona tipagem estática para maior robustez no código."
          />

          <SkillsCard
            icon={<FaNodeJs className="w-8 h-8 text-green-800" />}
            title="Node.Js"
            description="Ambiente de execução backend para construir APIs e microsserviços."
          />

          <SkillsCard
            // Ícone do Express (requer 'react-icons/si')
            icon={<SiExpress className="w-8 h-8 text-gray-700" />}
            title="Express"
            description="Framework minimalista para criação de APIs RESTful robustas com Node.js."
          />

          <SkillsCard
            icon={<FaGear className="w-8 h-8 text-red-500" />}
            title="RESTful APIs"
            description="Foco no design e consumo de APIs para comunicação entre cliente e servidor."
          />

          <SkillsCard
            icon={<SiMongodb className="w-8 h-8 text-green-500" />}
            title="MongoDB"
            description="Banco de dados NoSQL utilizado para persistência de dados de forma escalável."
          />

          <SkillsCard
            icon={<FaGitAlt className="w-8 h-8 text-orange-500" />}
            title="Git"
            description="Sistema de controle de versão para gerenciamento e colaboração em projetos."
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
