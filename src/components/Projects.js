import React, { useState } from "react";
import { projects } from "../data";
import { FaCode } from "react-icons/fa";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Projects() {
    const [showDetails, setShowDetails] = useState(null);

    return (
        <section id="projects" className="body-font">
            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOut'>
                <div className="container px-3 py-5 mx-auto text-center lg:px-40">

                    <div className="flex flex-col w-full mb-20">
                        <FaCode className="mx-auto inline-block w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
                            Projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-xl md:text-2xl xl:text-3xl text-lg">
                            Here are some of my best "projects" that I have been working on. Not all of my "work" is
                            displayed here but those are what I consider decent so far.
                            I am still working on some, and most of my work is hosted on my GitHub.
                            I am also still learning and slowly improving so expect me to add more projects here in the future.
                            You can click on any card below to check them out!
                        </p>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={project.image}
                                className="relative border-2 border-yellow-200 rounded-lg bg-black cursor-pointer"
                            >
                                <img
                                    alt={project.title}
                                    className="w-full h-64 object-cover object-center rounded-lg"
                                    src={project.image}
                                    onClick={() => setShowDetails(index === showDetails ? null : index)}
                                />
                                {showDetails === index && (
                                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
                                        <div className="text-white text-center">
                                            <h1 className="title-font text-lg font-medium mb-3 text-yellow-400">
                                                {project.title}
                                            </h1>
                                            <h2 className="tracking-widest text-sm title-font font-medium text-green-800 mb-1">
                                                {project.subtitle}
                                            </h2>
                                            <p className="leading-relaxed text-green-400">
                                                {project.description}
                                            </p>
                                            <div className="mt-4">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-yellow-400 hover:text-yellow-300"
                                                >
                                                    View Project
                                                </a>
                                                <span className="mx-2 text-yellow-400">|</span>
                                                <button
                                                    onClick={() => setShowDetails(null)}
                                                    className="text-green-400 hover:text-green-300"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </ScrollAnimation>
        </section>
    );
}
