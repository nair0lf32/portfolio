"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Ghost } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function About() {
    const [isImageToggled, setIsImageToggled] = useState(false);

    const handleImageToggle = () => {
        setIsImageToggled(!isImageToggled);
    };

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-8 md:px-16 text-center">

                <div className="relative inline-flex flex-col md:flex-row items-center md:items-start gap-1">
                    <div className="relative flex">
                        {/* Pulsing Aura */}
                        <span className="absolute inline-flex inset-0 rounded-full bg-lime-200
                        bg-opacity-20
                        w-50 animate-ping delay-5000"></span>
                        {/* Hero Image */}
                        <div className="relative z-10"
                            style={{
                                shapeOutside: "circle(50%)",
                                clipPath: "circle(50%)",
                            }}>

                            {/* Image */}

                    <Avatar className="size-50 relative z-10 object-cover object-center
                                rounded-full cursor-pointer
                                border-lime-200 shadow-md
                                hover:border-lime-200">
                            <AvatarImage
                                alt = "florian edemessi hero"
                                className="relative z-10 object-cover object-center rounded-full cursor-pointer
                                border-4 border-lime-950 shadow-md hover:border-lime-300 bg-stone-950
                                dark:bg-stone-400"
                                src={
                                    isImageToggled
                                        ? "/self2.png"
                                        : "/self.png"
                                }
                                loading="lazy"
                                    onClick={handleImageToggle}
                                />
                    <AvatarFallback>FE</AvatarFallback>
                    </Avatar>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-4xl">
                        {/* Title */}
                        <motion.h1 className="text-lime-950 dark:text-lime-400 text-xl md:text-4xl xl:text-6xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut",
                            },
                            }}>
                        <Ghost className="inline-block w-16 h-16 mr-2" />
                        Hello world! I&apos;m nairolf32
                                <br /> That medic who codes (somehow)
                        </motion.h1>

                        {/* Paragraph */}
                        <motion.p className="text-xl md:text-2xl xl:text-3xl leading-none mb-6"
                                                        initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut",
                            },
                        }}>
                                I am EDEMESSI Florian Eudes (a.k.a nairolf32), A Medical student from Cotonou (Benin)
                                with passion on the side for web, mobile, software development and cybersecurity.
                                Solo learner, elite member of the &quot;self-made&quot; club. Curiosity is probably
                                the word that defines me best,
                                and I am always looking for new challenges and problems to solve (I don&apos;t want peace).
                                As everyone got one nowadays, here is my [awesome] portfolio website.
                            </motion.p>

                        {/* Buttons */}
                        <div className="flex justify-center md:justify-start gap-4">
                            <Button
                                className="border shadow-lg text-white bg-lime-500 px-4 py-2
                                text-sm md:text-base rounded hover:bg-lime-600
                                transition-transform transform hover:scale-105">
                                <Link href="#contact">Contact Me</Link>
                            </Button>
                            <Button
                                className="border shadow-lg text-gray-800 bg-gray-200 px-4 py-2
                                text-sm md:text-base rounded hover:bg-gray-300
                                transition-transform transform hover:scale-105">
                                <Link href="#projects">See what I do</Link>
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
