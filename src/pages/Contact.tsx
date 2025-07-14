import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h1>

      <motion.div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-br from-fuchsia-900/30 to-purple-900/10 p-8 rounded-xl shadow-lg border border-fuchsia-700 backdrop-blur-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-4xl text-fuchsia-500 mb-4" />
          <p className="text-purple-300 text-sm mb-1">Email</p>
          <p className="text-white font-medium">rjayocon06@gmail.com</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaLinkedin className="text-4xl text-fuchsia-500 mb-4" />
          <p className="text-purple-300 text-sm mb-1">LinkedIn</p>
          <a
            href="https://linkedin.com/in/rjayocon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-fuchsia-300 transition"
          >
            linkedin.com/in/rjayocon
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaGithub className="text-4xl text-fuchsia-500 mb-4" />
          <p className="text-purple-300 text-sm mb-1">GitHub</p>
          <a
            href="https://github.com/rommelocon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-fuchsia-300 transition"
          >
            github.com/rommelocon
          </a>
        </div>
      </motion.div>

      <motion.p
        className="mt-16 text-center max-w-2xl text-purple-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm always open to interesting projects, creative collaborations, or just chatting tech. Feel free to reach out — let's build something awesome together.
      </motion.p>
    </section>
  );
};

export default Contact;