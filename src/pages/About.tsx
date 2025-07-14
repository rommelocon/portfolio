import { motion } from "framer-motion";
import RommelPhoto from "../assets/rommel_photo2.jpeg";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss
} from "react-icons/si";

const technologies = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
];

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      {/* Top Section */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={RommelPhoto}
            alt="Rommel Ocon"
            className="w-56 h-56 rounded-full object-cover shadow-[0_0_25px_rgba(255,0,255,0.3)] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-4">
            About Me
          </h1>
          <p className="text-purple-200 text-base md:text-lg leading-relaxed">
            I'm <span className="text-fuchsia-400 font-semibold">Rommel Jay Ocon</span>, a passionate{" "}
            <span className="text-fuchsia-300">Full-stack Developer</span> who crafts visually striking, performant,
            and user-friendly applications. I combine creative design with clean, scalable code to bring digital ideas to life.
          </p>
        </motion.div>
      </div>

      {/* Tech Marquee */}
      <div className="w-full overflow-hidden mt-8">
        <h2 className="text-2xl text-neutral-200 font-semibold mb-6 text-center">Technologies I Use</h2>

        <motion.div
          className="flex gap-16 items-center px-4 text-fuchsia-300 text-lg whitespace-nowrap animate-slide"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 py-2 rounded-xl border border-fuchsia-600/30 bg-fuchsia-800/10 hover:bg-fuchsia-700/20 hover:scale-105 transition-transform duration-300 min-w-[80px]"
            >
              <span className="text-4xl md:text-5xl mb-1">{tech.icon}</span>
              <span className="text-sm md:text-base text-purple-200">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;