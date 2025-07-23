import React from 'react'
import logo from "../assets/kr_logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mt-5 mb-10 flex items-center justify-between py-6 px-4">
            <div className="flex items-center">
                <img className="w-10 mx-2" src={logo} alt="logo" />
            </div>
            <div className="flex items-center gap-4 text-2xl text-neutral-200">
                <a
                    href="https://www.linkedin.com/in/mkaushikreddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Kaushikreddy91"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-gray-400 transition-colors"
                >
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};
export default Navbar
