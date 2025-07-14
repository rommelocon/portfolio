import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaHome, FaUser,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";

const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Projects", path: "/projects", icon: <FaComputer /> },
    { name: "Skills", path: "/skills", icon: <GiSkills /> },
    { name: "Contact", path: "/contact", icon: <TiContacts /> },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMenu = () => setMobileOpen(!mobileOpen);

    return (
        <header className="bg-black shadow-lg fixed w-full top-0 z-50 border-b border-fuchsia-900/30">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <NavLink
                    to="/"
                    className="text-2xl md:text-3xl font-extrabold tracking-wide relative text-neutral-100"
                >
                    arenjay
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end
                            className={({ isActive }) =>
                                `inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${isActive
                                    ? "bg-white/10 backdrop-blur-sm border border-fuchsia-500 text-fuchsia-300 shadow-inner shadow-fuchsia-800/20"
                                    : "text-fuchsia-400 hover:text-purple-300 hover:bg-fuchsia-800/20"
                                }`
                            }
                        >
                            {link.icon}
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="hidden md:flex ml-6 text-fuchsia-500 space-x-3 text-lg">
                    <a href="https://github.com/rommelocon" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaGithub /></a>
                    <a href="https://linkedin.com/in/rjayocon" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaLinkedin /></a>
                    <a href="https://twitter.com/rjintoki" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300"><FaTwitter /></a>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-fuchsia-500 text-2xl focus:outline-none"
                >
                    {mobileOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <nav className="md:hidden bg-black px-4 pb-6">
                    <ul className="flex flex-col space-y-3 mt-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${isActive
                                        ? "bg-white/10 backdrop-blur-sm border border-fuchsia-500 text-fuchsia-300 shadow-inner shadow-fuchsia-800/20"
                                        : "text-fuchsia-400 hover:text-purple-300 hover:bg-fuchsia-800/20"
                                    }`
                                }
                            >
                                {link.icon}
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="flex justify-center mt-3 space-x-4 text-fuchsia-500 text-xl">
                            <a href="https://github.com/rommelocon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://linkedin.com/in/rjayocon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://twitter.com/rjintoki" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </div>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;