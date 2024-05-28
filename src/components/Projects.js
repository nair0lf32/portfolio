import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";
import Fade from 'react-reveal/Fade';

export default function Projects() {
    const [showDetails, setShowDetails] = useState(null);

    return (
        <section id="projects" className="body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <Fade top>
                    <div className="flex flex-col w-full mb-20">
                        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                            Projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-1xl md:text-2x1 xl:text-3x1 text-2xl">
                            Here are some of my best "projects" that I have been working on. Not all of my "work" is
                            displayed here but those are what I consider decent so far.
                            I am still working on some, and most of my work is hosted on my GitHub.
                            I am also still learning and slowly improving so expect me to add more projects here in the future.
                            You can click on any card below to check them out!
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="flex flex-wrap justify-center -m-4 md:space-x-4">
                        {projects.map((project, index) => (
                            <div
                                key={project.image}
                                className="sm:w-full md:w-1/2 lg:w-1/3 p-4"
                            >
                                <div className="relative">
                                    <img
                                        alt="gallery"
                                        className="w-full h-64 object-cover object-center border-2 border-yellow-200 rounded-lg bg-black cursor-pointer"
                                        src={project.image}
                                        onClick={() => setShowDetails(index === showDetails ? null : index)}
                                    />
                                    {showDetails === index && (
                                        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                                            <div className="text-white text-center">
                                                <h1 className="title-font text-lg font-medium mb-3 text-yellow-400">
                                                    {project.title}
                                                </h1>
                                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
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
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
}
