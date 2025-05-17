"use client";

import React from 'react';
import { FiFigma } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaCloud, FaReact } from 'react-icons/fa';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col ml-0 px-24 py-16 max-md:px-10 max-sm:px-5" aria-labelledby="hero-title">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero-bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Content */}
            <div className="flex flex-col w-full lg:max-w-[1100px] relative top-26 md:top-20 lg:mt-8 ml-0 lg:ml-20 sm:top-35 lg:top-20 gap-8 md:gap-4">
                {/* Slow transparency Reveal */}
                <div className="flex gap-2 w-[66%] sm:w-[50%] md:w-[32%] lg:w-[29%] rounded-md p-1 items-center bg-gradient-to-b from-zinc-50/10 to-indigo-600/50 border border-zinc-50/10 start-up">
                    <h2 className="px-2.5 py-2.5 text-lg bg-[#441e97] border border-zinc-400/40 rounded-md text-zinc-300">
                        New
                    </h2>
                    <span className="text-sm lg:text-lg p-2 font-light rounded-md text-stone-300">
                        No.1 Startup Studio of 2025
                    </span>
                </div>
                {/* Blurred fade in */}
                <div className="flex flex-col gap-5">
                    <h1 id="hero-title" className="text-base leading-none text-white md:text-7xl max-sm:text-[2.7em] lg:text-[5.5em] gradient-text">
                        UI/UX Design <br className="hidden lg:block" />Web Development.
                    </h1>
                    {/* Transparency Reveal */}
                    <p className="text-base lg:text-lg text-zinc-300/80 font-light max-md:text-xl max-sm:text-base">
                        We specialize in crafting unique digital presence that help
                        businesses grow and stand out in their industries.
                    </p>
                </div>
                {/* Transparency Reveal starting left to right slight delay right button */}
                <div className="flex gap-6 items-start max-sm:flex-col max-sm:items-start">
                    <Link
                        href="/contact-us"
                        className="px-4 py-2.5 lg:px-5 lg:py-3 text-base lg:text-lg text-zinc-300 rounded-xl bg-zinc-800/50 backdrop-blur-3xl border border-zinc-400/70 hover:bg-zinc-700/60 hover:translate-x-1 transition duration-200 ease-in-out"
                        aria-label="Learn about Load of Pixels Google UX Designer, Cloud and Web Developer"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/cloud-services"
                        className="px-4 py-2.5 lg:px-5 lg:py-3 text-base lg:text-lg font-light text-zinc-300 rounded-xl bg-zinc-800/50 backdrop-blur-3xl border shadow-2xl border-zinc-400/70 hover:bg-zinc-900/60 hover:translate-x-1 hover:shadow-[2px_-2px_50px] hover:shadow-indigo-700/70 hover:border-indigo-700 transition duration-200 ease-in-out"
                        aria-label="Learn about what services we offer, including Google UX Design, Full Stack Development, and Cloud Services"
                    >
                        Our Services
                    </Link>
                </div>
            </div>

            {/* Scroll right to left */}
            <div className="relative overflow-hidden top:12 mt-32 sm:mt-40 lg:top-8 lg:mt-28 h-20 border-t bg-black border-black border-b-zinc-800 border-x-[solid] w-full max-sm:flex-wrap">
                {/* Left opacity cover */}
                <div className="absolute top-0 left-0 h-full w-[6%] bg-black opacity-80 z-10"></div>

                {/* Right opacity cover */}
                <div className="absolute top-0 right-0 h-full w-[70%] bg-black opacity-80 z-10"></div>

                {/* Non-opacity right cover */}
                <div className="absolute top-0 right-0 h-full w-[64%] bg-black z-20"></div>

                {/* Non-opacity left cover */}
                <div className="absolute top-0 left-0 h-full w-[4%] bg-black z-20"></div>

                {/* View window */}
                <div className="absolute top-0 left-[5%] border-t border-zinc-200/10 h-full w-[30%] z-20 pointer-events-none"></div>

                {/* Scrolling content */}
                <div className="flex gap-24 mt-4 items-center animate-scroll text-zinc-400/50 lg:text-zinc-400/30">
                    <FiFigma className="w-12 h-12" title="Figma" />
                    <AiFillGithub className="w-12 h-12" title="GitHub" />
                    <FaReact className="w-12 h-12" title="React" />
                    <FaCloud className="w-12 h-12" title="Cloud Services" />
                    {/* Add more icons here */}
                </div>
            </div>
        </section>
    );
};

export default Hero;