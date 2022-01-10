import React from "react";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hi, I'm Florian.
                        <br className="hidden lg:inline-block" /> That medic who codes.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a medical student from Cotonou, Benin with a passion for software, mobile and web development.
                        I am also invested in cybersecurity. I am an eternal solo learner and I am always looking for new challenges.
                        This is my portfolio website.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See what I do
                        </a>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-40">
                    <img width="300"
                        height="300"
                        className="object-cover object-center "
                        alt="hero"
                        src='https://github.com/nair0lf32/portfolio/blob/master/public/Assets/self.png?raw=true'
                        onMouseOver={e => (e.currentTarget.src = 'https://github.com/nair0lf32/portfolio/blob/master/public/Assets/self2.png?raw=true')}
                        onMouseOut={e => (e.currentTarget.src = 'https://github.com/nair0lf32/portfolio/blob/master/public/Assets/self.png?raw=true')}
                    />
                </div>
            </div>

        </section>
    );
}