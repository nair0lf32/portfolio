import React from "react";
import Toggle from './ThemeToggle';

export default function Navbar() {
    return (
        <header className="md:sticky top-0">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-big mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        EDEMESSI Florian
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 font-medium flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-gray">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#contact" className="mr-5 hover:text-white">
                        Contact
                    </a>
                </nav>
                <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
                    <Toggle />
                </div>

            </div>
        </header>
    );
}
