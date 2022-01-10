import React from "react";
import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
    return (
        <section id="contact" className="relative">

            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <MailIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Contact
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Hey! Wanna get in touch? You can find me at those places.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4 place-content-center space-x-4">
                    <a href="https://github.com/nair0lf32">  <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' width='40' height='40'></img>    </a>
                    <a href="https://www.linkedin.com/in/florian-edemessi-b29129172/">  <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' width='40' height='40'></img>    </a>
                    <a href="https://twitter.com/florianedemessi">  <img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' width='40' height='40'></img>    </a>
                </div>


            </div>


            <div className='flex justify-center items-center h-16 bg-black text-white'>
                <p>EDEMESSI Florian nairolf32, © 2022</p>
            </div>

        </section>
    );
}