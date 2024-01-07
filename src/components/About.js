import React from "react";
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-4 md:flex-row flex-col items-center sm:text-xl md:text-2xl xl:text-3xl text-lg">
                <div className="lg:flex-grow md:w-1/2 lg:pr-6 md:pr-4 flex flex-col md:items-start mb-4 md:mb-0 ml-4 md:ml-8">
                    <Fade top>
                        <h1 className="title-font sm:text-4xl md:text-5xl xl:text-5xl font-bold mb-2 md:mb-4">
                            Hi, I'm Florian
                            <br className="hidden lg:inline-block" /> That medic who codes (somehow).
                        </h1>
                    </Fade>
                    <Fade left>
                        <p className="mb-4 leading-relaxed ml-4 md:ml-0">
                            I am a Medical student from Cotonou (Benin), with some passion for software development. I use
                            multiple technologies, usually whatever does the job, with a personal liking for Python
                            and Javascript. React and TailwindCSS for instance, mostly for learning purposes.
                            I am also invested in cybersecurity and good coding practices. I am a solo learner (selfmade club member) always looking for new challenges and
                            problems to solve (I don't want peace).
                            This is my portfolio website (as everyone got one now)
                        </p>
                    </Fade>
                    <div className="flex justify-center md:justify-start mb-4">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See what I do
                        </a>
                    </div>
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-50 relative ml-4 mt-4 md:mt-0">
                    <Fade>
                        <img
                            width="400"
                            height="400"
                            className="object-cover object-center rounded-full"
                            alt="florian edemessi hero"
                            src="https://github.com/nair0lf32/portfolio/blob/3a8ce20ee267defa218f0cff1a5f80c3f5b7daec/public/Assets/self.png?raw=true"
                            onMouseEnter={e => (e.currentTarget.src = "https://github.com/nair0lf32/portfolio/blob/3a8ce20ee267defa218f0cff1a5f80c3f5b7daec/public/Assets/self2.png?raw=true")}
                            onMouseLeave={e => (e.currentTarget.src = "https://github.com/nair0lf32/portfolio/blob/3a8ce20ee267defa218f0cff1a5f80c3f5b7daec/public/Assets/self.png?raw=true")}
                        />
                    </Fade>
                </div>
            </div>
        </section>
    );
}
