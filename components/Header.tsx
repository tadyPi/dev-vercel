"use client";

import React from 'react';
import { FiMenu } from 'react-icons/fi';

// interface HeaderProps {
//     onGetInTouch: () => void;
// }

const Header: React.FC/*<HeaderProps>*/ = (/*{ onGetInTouch }*/) => {
    return (
        <header className="flex justify-between fixed items-center px-32 py-9 w-full z-100 bg-zinc-600/20 border-b border-b-indigo-300/50 lg:border-b-black/60 backdrop-blur-sm border-x-[solid] h-[90px] max-md:px-10 max-sm:px-5" role="banner">
            <h1 className="text-2xl text-white font-bold max-md:text-3xl max-lg:text-5xl">
                Load of Pixels
            </h1>
            <nav className="flex gap-10 items-center mr-72 max-md:hidden" role="navigation">
                <a href="#home" className="text-base text-white cursor-pointer">Home</a>
                <a href="#web-developer" className="text-base text-white cursor-pointer">Web Developer</a>
                <a href="#ux-design" className="text-base text-white cursor-pointer">UX Design</a>
                <a href="#cloud-services" className="text-base text-white cursor-pointer">Cloud Services</a>
                <a href="#contact" className="text-base text-white cursor-pointer">Contact</a>
            </nav>
            <div className="flex gap-6 items-center">
                <button
                    className="px-4 py-3 text-lg text-gray-200 bg-blue-600 rounded-2xl shadow-[2px_-2px_50px] shadow-blue-600 max-md:hidden max-md:text-lg max-sm:text-base"
                    // onClick={onGetInTouch}
                    aria-label="Get in Touch"
                >
                    Get in Touch
                </button>
                <button className="hidden max-md:block" aria-label="Menu">
                    <FiMenu className="border text-2xl text-white" aria-hidden="true"></FiMenu>
                </button>
            </div>
        </header>
    );
};

export default Header;