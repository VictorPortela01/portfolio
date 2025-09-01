import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaReact,
  FaHtml5,
  FaGitAlt,
  FaCss3Alt,
  FaPaintBrush,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600">
            Technologies I work with build modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillsCard
            icon={<FaReact className="w-8 h-8 text-blue-500" />}
            title="React"
            description="Building dynamic and interactive user interfaces"
          />

          <SkillsCard
            icon={<FaHtml5 className="w-8 h-8 text-orange-500" />}
            title="HTML5"
            description="Structuring content for the web"
          />

          <SkillsCard
            icon={<FaCss3Alt className="w-8 h-8 text-blue-600" />}
            title="CSS3"
            description="Styling and animations for modern web applications"
          />

          <SkillsCard
            icon={<IoLogoJavascript className="w-8 h-8 text-yellow-500" />}
            title="JavaScript"
            description="Programming language for the web"
          />

          <SkillsCard
            icon={<RiTailwindCssFill className="w-8 h-8 text-teal-500" />}
            title="TailwindCSS"
            description="Utility-first CSS framework for rapid UI development"
          />

          <SkillsCard
            icon={<FaGitAlt className="w-8 h-8 text-red-500" />}
            title="Git"
            description="Version control and collaboration"
          />

          <SkillsCard
            icon={<MdOutlinePhoneIphone className="w-8 h-8 text-purple-500" />}
            title="Responsive Design"
            description="Mobile-first approach"
          />

          <SkillsCard
            icon={<FaPaintBrush className="w-8 h-8 text-pink-500" />}
            title="UI/UX"
            description="User-centered design principles"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
