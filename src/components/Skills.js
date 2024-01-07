import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import Fade from 'react-reveal/Fade';

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-4 py-10 mx-auto sm:text-xl md:text-2xl xl:text-3xl text-lg">
                <Fade top>
                    <div className="text-center mb-12">
                        <ChipIcon className="w-10 inline-block mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                            Skills and Technologies
                        </h1>
                        <p className="sm:text-1xl md:text-2xl xl:text-3xl text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            I generally use various technologies to build my projects, usually whatever does the job
                            (React and TailwindCSS for instance, mostly for learning purposes).
                            Here are the technologies and tools I am comfortable with and those that I personally like
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="flex flex-wrap lg:w-2/3 sm:mx-auto sm:mb-2 -mx-2">
                        {skills.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <img
                                        width="50"
                                        height="50"
                                        alt="logo"
                                        className="object-cover left-0 top-0 mr-4"
                                        src={skill.logo}
                                    />
                                    <span className="title-font font-medium text-white right-0">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
}
