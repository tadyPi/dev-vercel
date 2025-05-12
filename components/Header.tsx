"use client";

import Link from 'next/link';
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
            <nav className="flex gap-10 items-center mr-68 max-md:hidden" role="navigation">
                <a href="#" className="text-base text-white cursor-pointer hover:text-indigo-400">Home</a>
                <a href="/web-development" className="text-base text-white cursor-pointer hover:text-indigo-400">Web Developer</a>
                <a href="/ux-design" className="text-base text-white cursor-pointer hover:text-indigo-400">UX Design</a>
                <a href="/cloud-services" className="text-base text-white cursor-pointer hover:text-indigo-400">Cloud Services</a>
                <a href="#contact" className="text-base text-white cursor-pointer hover:text-indigo-400">Contact</a>
            </nav>
            <div className="flex gap-6 items-center">
                <Link href="/"
                    className="px-4 py-3 text-lg text-gray-200 bg-gradient-to-b from-zinc-500/10 to-indigo-700/70 border border-zinc-50/10 rounded-xl shadow-[2px_-2px_70px]
                    shadow-indigo-700 max-md:hidden max-md:text-lg max-sm:text-base hover:border-indigo-700/70 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600/70 hover:shadow-[2px_-2px_50px] hover:shadow-indigo-700"
                    // onClick={onGetInTouch}
                    aria-label="Get in Touch"
                >
                    Get in Touch
                </Link>
                <button className="hidden max-md:block" aria-label="Menu">
                    <FiMenu className="border text-2xl text-white" aria-hidden="true"></FiMenu>
                </button>
            </div>
        </header>
    );
};

export default Header;