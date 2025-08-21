"use client";
import { motion } from "motion/react";
import { projects } from "@/data";
import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Projects() {
    return (
        <section id="projects">
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
                <div>
                    <Code className="w-16 h-16 inline-block mb-4 text-lime-950 dark:text-lime-400" />
                    <h1 className="text-lime-950 dark:text-lime-400 sm:text-4xl text-3xl font-bold title-font mb-4">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-none sm:text-xl md:text-2xl xl:text-3xl text-lg">
                        Here are some of my best &quot;projects&quot; that I have been working on.
                        Not all of my &quot;work&quot; is displayed here but those are what I consider decent so far.
                        I am still working on some, and most of my work is hosted on my GitHub.
                        I am also still learning and slowly improving so expect me to add more projects here in the future.
                        You can click on any card below to check them out!
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-16">
                    {projects.map((project, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-stone-950">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <Image
                                        alt={project.title}
                                        className="w-full h-64 object-cover object-center rounded-lg"
                                        width={256}
                                        height={256}
                                        src={project.image}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <p>{project.subtitle}</p>
                                <CardAction>
                                    <Button variant="link">
                                        <Link href={project.link} target="_blank">
                                            View Project
                                        </Link>
                                    </Button>
                                </CardAction>
                            </CardFooter>
                        </Card>
                    )
                    )}
                </div>
            </motion.div>
        </section>
    );
}
