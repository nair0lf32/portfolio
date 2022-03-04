import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import Fade from 'react-reveal/Fade';


export default function Skills() {
    return (
        <section id="skills" >
            <div className="container px-5 py-10 mx-auto sm:text-1xl md:text-2x1 xl:text-3x1 text-2xl">
                <Fade top>
                    <div className="text-center mb-20">
                        <ChipIcon className="w-10 inline-block mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                            Skills and Technologies
                        </h1>
                        <p className="sm:text-1xl md:text-2x1 xl:text-3x1 text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Here are the technologies and tools I am confortable with. What I use to build my projects,
                            And what I am passionate about.
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="flex flex-wrap lg:w-2/5 sm:mx-auto sm:mb-2 -mx-2">
                        {skills.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center ">

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