import React, { useState } from "react";
import { BiSolidInvader } from "react-icons/bi";
import ScrollAnimation from 'react-animate-on-scroll';


export default function About() {
    const [isImageToggled, setIsImageToggled] = useState(false);

    const handleImageToggle = () => {
        setIsImageToggled(!isImageToggled);
    };

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-8 md:px-16 text-center">

                <div className="relative inline-flex flex-col md:flex-row items-center md:items-start">
                    <div class="relative flex">
                        {/* Pulsing Aura */}
                        <span className="absolute inline-flex inset-0 rounded-full bg-green-500 bg-opacity-20
                        w-25 animate-ping delay-5000"></span>
                        {/* Hero Image */}
                        <div
                            className="relative w-64 h-64 mx-auto md:mr-6 mb-6 md:mb-0 flex-shrink-0"
                            style={{
                                shapeOutside: "circle(50%)",
                                clipPath: "circle(50%)",
                            }}>

                            {/* Image */}
                            <img
                                width="256"
                                height="256"
                                className="relative z-10 object-cover object-center rounded-full cursor-pointer
                                border-4 border-green-800 shadow-md hover:border-green-500"
                                alt="florian edemessi hero"
                                src={
                                    isImageToggled
                                        ? "https://github.com/nair0lf32/portfolio/blob/3a8ce20ee267defa218f0cff1a5f80c3f5b7daec/public/Assets/self2.png?raw=true"
                                        : "https://github.com/nair0lf32/portfolio/blob/3a8ce20ee267defa218f0cff1a5f80c3f5b7daec/public/Assets/self.png?raw=true"
                                }
                                loading="lazy"
                                onClick={handleImageToggle}
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left max-w-4xl">
                        {/* Title */}
                        <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceOutLeft'>
                            <h1 className="text-4xl font-bold mb-6">
                                Hello world! I'm nairolf32<BiSolidInvader className="inline-block" />
                                <br /> That medic who codes (somehow)
                            </h1>
                        </ScrollAnimation>

                        {/* Paragraph */}
                        <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutUp'>
                            <p className="text-xl md:text-2xl xl:text-3xl leading-relaxed mb-6">
                                I am EDEMESSI Florian Eudes (a.k.a nairolf32), A Medical student from Cotonou (Benin)
                                with passion on the side for web, mobile, software development and cybersecurity.
                                Solo learner, elite member of the "self-made" club. Curiosity is probably
                                the word that defines me best,
                                and I am always looking for new challenges and problems to solve (I don't want peace).
                                As everyone got one nowadays, here is my [awesome] portfolio website.
                            </p>
                        </ScrollAnimation>
                        {/* Buttons */}
                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="#contact"
                                className="text-white bg-green-500 px-4 py-2 text-sm md:text-base rounded hover:bg-green-600 transition-transform transform hover:scale-105">
                                Contact me
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-800 bg-gray-200 px-4 py-2 text-sm md:text-base rounded hover:bg-gray-300 transition-transform transform hover:scale-105">
                                See what I do
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
