import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Resume from "../assets/Rommel_Resume.pdf";
import RommelPhoto from "../assets/rommel_photo.jpeg"; // replace with your image
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Replaces "easeOut" with valid cubic-bezier
        },
    }),
};

const Home = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-black text-white px-6 py-12 overflow-hidden">
            {/* Blobs */}
            {/* <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-30 animate-bounce z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-fuchsia-500 rounded-full blur-3xl opacity-30 animate-bounce z-0"></div> */}

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
                {/* Left: Animated Hero Text */}
                <div>
                    <motion.p
                        className="text-md mb-2"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        👋 Hello, I’m
                    </motion.p>
                    <motion.h1
                        className="text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                    >
                        Rommel Jay Ocon
                    </motion.h1>
                    <motion.h2
                        className="text-xl md:text-2xl font-medium text-purple-200 mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                    >
                        Full-stack Developer
                    </motion.h2>
                    <motion.p
                        className="text-gray-300 text-base md:text-lg mb-8"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                    >
                        I build clean, responsive, and user-friendly web and android applications using modern technologies.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={4}
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded hover:bg-fuchsia-700 transition"
                        >
                            View Projects <FiArrowRight className="text-lg" />
                        </Link>

                        <a
                            href={Resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-fuchsia-500 text-fuchsia-400 font-semibold rounded hover:bg-fuchsia-900/30 transition"
                        >
                            <FiDownload className="text-lg" />
                            Resume
                        </a>
                    </motion.div>
                </div>

                {/* Right: Animated Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src={RommelPhoto}
                        alt="Rommel Ocon"
                        className="animate-pulse w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-[0_0_25px_rgba(255,0,255,0.3)] hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;