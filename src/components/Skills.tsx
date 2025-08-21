"use client";
import { motion } from "motion/react";
import { skills } from "@/data";
import { Wrench } from "lucide-react";
import Image from "next/image";

export default function Skills() {
    return (
        <section id="skills">
            <motion.div
                className="container px-4 py-10 mx-auto sm:text-xl md:text-2xl xl:text-3xl text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            animate={{
                transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                },
                }}
            >


                    <div className="mb-12">
                        <Wrench className="w-16 h-16 inline-block mb-4 text-lime-950 dark:text-lime-400" />

                        <h1 className="text-lime-950 dark:text-lime-400 sm:text-4xl text-3xl font-bold title-font mb-4">
                            Skills and Technologies
                        </h1>
                        <p className="sm:text-1xl md:text-2xl xl:text-3xl text-2xl leading-none xl:w-2/4 lg:w-3/4 mx-auto">
                            I generally use various technologies to build my projects, usually whatever does the job
                            (React and TailwindCSS for instance, mostly for learning purposes).
                            Here are the technologies and tools I am comfortable with and those that I personally like
                        </p>
                    </div>


                    <div className="flex flex-wrap lg:w-2/3 sm:mx-auto sm:mb-2 -mx-2">
                        {skills.map((skill) => (
                            <div key={skill.name} className="p-2 sm:w-1/2 w-50">
                                <div className="bg-slate-600 dark:bg-slate-800 rounded flex p-4 h-full items-center
                                shadow-lg shadow-stone-950 hover:shadow-none">
                                    <Image
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
            </motion.div>
        </section>
    );
}
