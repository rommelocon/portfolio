import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiNextdotjs,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

const skillSections = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: ".NET MAUI", icon: <SiDotnet />, level: 85 },
      { name: "Laravel", icon: <FaLaravel />, level: 70 },
      { name: "Python", icon: <FaPython />, level: 75 },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "MySQL", icon: <SiMysql />, level: 85 },
      { name: "Firebase", icon: <SiFirebase />, level: 70 },
      { name: "Redux", icon: <SiRedux />, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skillset
      </motion.h1>

      <div className="max-w-5xl w-full space-y-16">
        {skillSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-fuchsia-400 mb-6 border-b border-fuchsia-700 pb-2">
              {section.title}
            </h2>

            <div className="space-y-6">
              {section.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-fuchsia-500">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-purple-300">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-fuchsia-900/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;