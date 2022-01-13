import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import 'animate.css';

export default function Projects() {
    return (
        <section id="projects" className="body-font" class="animate__animated animate__fadeIn">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-1xl md:text-2x1 xl:text-3x1 text-2xl">
                        Here are some of the projects I have worked on. That's what I did so far.
                        I am still working on some, but so far that is what I can show. Most of my work is on my GitHub.
                        I am still learning and expect to add more projects in the future.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 p-4 ">
                            <div className="flex relative w-5/6 h-full">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center border-2 border-yellow-400 rounded-lg"
                                    src={project.image}
                                />
                                <div className="px-4 py-10 relative  w-full h-full border-4 border-yellow-400 bg-black opacity-0 hover:opacity-100 rounded-lg">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium mb-3 text-yellow-400">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-green-400">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}