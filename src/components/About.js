import React from "react";
import Fade from 'react-reveal/Fade';



export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center sm:text-1xl md:text-2x1 xl:text-3x1 text-2xl">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <Fade top>
                        <h1 className="title-font sm:text-5xl md:text-7x1 xl:text-9x1 text-6xl mb-4 font-medium" >
                            Hi, I'm Florian.
                            <br className="hidden lg:inline-block" /> That medic who codes.
                        </h1>
                    </Fade>
                    <Fade left>
                        <p className="mb-8 leading-relaxed" >
                            I am a medical student from Cotonou, Benin with a passion for software, mobile and web development.
                            I am also invested in cybersecurity. I am an eternal solo learner and I am always looking for new challenges.
                            This is my portfolio website.
                        </p>
                    </Fade>
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

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-50">
                    <Fade>
                        <img width="300"
                            height="300"
                            className="object-cover object-center "
                            alt="hero"
                            //Got broken links after deploying to github...could not load images locally
                            //serving from remote then 
                            //This is more a workaround than a fix...so TODO: fix this later
                            src='https://github.com/nair0lf32/portfolio/blob/master/public/Assets/self.png?raw=true'
                            onMouseEnter={e => (e.currentTarget.src = 'https://github.com/nair0lf32/portfolio/blob/master/public/Assets/self2.png?raw=true')}
                            onMouseLeave={e => (e.currentTarget.src = 'https://github.com/nair0lf32/portfolio/blob/master/public/Assets/self.png?raw=true')}
                        />
                    </Fade>
                </div>
            </div>
        </section>
    );
}