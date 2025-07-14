import { useState } from "react";
import { motion } from "framer-motion";
import FaceAttendance from "../assets/face_attendance.jpg";
import PopulationSurvey from "../assets/population_survey.svg";
import PetRegistration from "../assets/pet_registration.svg";
import ADIR from "../assets/adir.svg";
import Portfolio from "../assets/portfolio.svg";
import Metro from "../assets/metro.png";
import Streamify from "../assets/streamify.png"; // Add your Streamify image here
import Friendify from "../assets/friendify.png"; // Add your Friendify image here

interface ProjectType {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
}

// Define each project inside the array with title, description, tech, image, and link.
const projects: ProjectType[] = [
    {
        title: "Metro - E-commerce Frontend",
        description: "A modern, responsive e-commerce website built purely with HTML and CSS. Inspired by Metro UI style, it showcases products, categories, and a clean grid layout.",
        tech: ["HTML", "CSS"],
        link: "https://rommelocon.github.io", // Replace with the actual GitHub or demo link
        image: Metro // Update with the actual image path
    },
    {
        title: "Streamify - Music Streaming App",
        description:
            "A Spotify-like music streaming web app built with Create React App. Integrated with the ShazamCore API for real-time song browsing and playback. (Note: API access is currently expired and needs an update.)",
        tech: ["React", "Bootstrap", "Redux", "ShazamCore API"],
        image: Streamify, // replace with actual image path
        link: "https://merry-cajeta-40c2ba.netlify.app", // set a real URL if you publish it
    },
    {
        title: "Friendify - Social Media Network",
        description:
            "A Facebook-inspired social media platform built using Laravel Blade. Includes features like posts, likes, comments, friend requests, and real-time notifications. The project is available on GitHub as I wasn't able to publish it live due to Laravel deployment costs at the time.",
        tech: ["Laravel", "Blade", "MySQL", "TailwindCSS"],
        image: Friendify,
        link: "https://github.com/rommelocon/wd58p-capstone-group2-Friendify" // Set your deployment link if available
    },
    {
        title: "Face Recognition Attendance",
        description:
            "Raspberry Pi-based facial recognition with live detection, attendance logging, and offline sync.",
        tech: ["Python", "OpenCV", "Tkinter", "face_recognition"],
        image: FaceAttendance, // replace with actual image path
        link: "https://github.com/rommelocon/FacialRecognitionAttendance",
    },
    {
        title: "Animal Population Survey",
        description:
            "A .NET MAUI mobile app for surveying animal populations with offline sync and charts.",
        tech: [
            ".NET MAUI",
            "SQLite",
            "DevExpress",
            "MSSQL",
            "Entity Framework",
            "ASP .NET Core"
        ],
        image: PopulationSurvey,
        link: "",
    },
    {
        title: "Animal Disease Incident Reporting",
        description:
            "A .NET MAUI mobile app for quick and simple reporting animal disease incidents.",
        tech: [
            ".NET MAUI",
            "DevExpress",
            "MSSQL",
            "Entity Framework",
            "ASP .NET Core"
        ],
        image: ADIR,
        link: "",
    },
    {
        title: "Pet Registration",
        description:
            "A .NET MAUI mobile app for registering pets with offline sync.",
        tech: [
            ".NET MAUI",
            "SQLite",
            "DevExpress",
            "MSSQL",
            "Entity Framework",
            "ASP .NET Core"
        ],
        image: PetRegistration,
        link: "",
    },
    {
        title: "Portfolio Website",
        description:
            "This site! Built with Vite, React, Tailwind, and Framer Motion.",
        tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
        image: Portfolio,
        link: "#",
    },
];

const allTechs = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.tech))),
];

const Project = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.tech.includes(activeFilter));

    return (
        <section className="min-h-screen bg-black text-white px-6 py-20">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {allTechs.map((tech) => (
                    <button
                        key={tech}
                        onClick={() => setActiveFilter(tech)}
                        className={`px-4 py-2 rounded-full border ${activeFilter === tech
                            ? "bg-fuchsia-500 text-white border-fuchsia-600"
                            : "bg-black border-fuchsia-800 text-fuchsia-400 hover:bg-fuchsia-800/20"
                            } transition-all duration-300 text-sm`}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="bg-gradient-to-br from-fuchsia-900/30 to-purple-800/20 border border-fuchsia-700 rounded-xl shadow-lg backdrop-blur-md overflow-hidden flex flex-col justify-between transition hover:shadow-fuchsia-700/50 hover:-translate-y-1 duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-fill object-center "
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-purple-200 text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs text-purple-300 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-fuchsia-700/20 border border-fuchsia-500 px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto text-sm text-fuchsia-400 hover:text-purple-300 transition hover:underline"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Project;