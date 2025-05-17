"use client";

import Link from 'next/link';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

// interface HeaderProps {
//     onGetInTouch: () => void;
// }

const Header: React.FC/*<HeaderProps>*/ = (/*{ onGetInTouch }*/) => {
    return (
        <header className="flex justify-between fixed items-center px-32 md:px-8 py-9 w-full z-100 bg-zinc-600/20 border-b border-b-indigo-300/50 lg:border-b-black/60 backdrop-blur-sm border-x-[solid] h-[90px] max-md:px-10 max-sm:px-5" role="banner">
            <h1 className="text-2xl text-white font-bold max-md:text-3xl lg:text-2xl xl:text-5xl">
                Load of Pixels
            </h1>
            <nav className="flex gap-6 xl:gap-10 items-center md:mr-28 xl:mr-68 max-md:hidden" role="navigation">
                <Link href="/" className="text-base text-white cursor-pointer hover:text-indigo-400">Home</Link>
                <Link href="/web-development" className="text-base text-white cursor-pointer hover:text-indigo-400">Web Developer</Link>
                <Link href="/ux-design" className="text-base text-white cursor-pointer hover:text-indigo-400">UX Design</Link>
                <Link href="/cloud-services" className="text-base text-white cursor-pointer hover:text-indigo-400">Cloud Services</Link>
                <Link href="/contact-us" className="text-base text-white cursor-pointer hover:text-indigo-400">Contact</Link>
            </nav>
            <div className="flex gap-6 items-center">
                <Link href="/contact-us"
                    className="px-4 py-3 text-base md:text-[0.85rem] lg:text-lg text-gray-200 bg-gradient-to-b from-zinc-500/10 to-indigo-700/70 border border-zinc-50/10 rounded-xl shadow-[2px_-2px_70px]
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