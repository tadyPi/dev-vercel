"use client";

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col mt-32 xl:px-44 py-40 bg-gray-950 max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-10" role="contentinfo">
            <div className="flex md:gap-4 xl:gap-32 items-start max-md:flex-col">
                <div className="flex flex-col gap-20 max-w-[701px]">
                    <div className="flex flex-col gap-12">
                        <div className="h-px bg-[linear-gradient(90deg,#242424_0%,#999_53.56%,#212121_100%)] w-[426px] max-md:w-full" aria-hidden="true"></div>
                        <h3 className="text-3xl text-white">Load of Pixels</h3>
                        <p className="text-base max-w-[493px] text-neutral-400">
                            Load of Pixels is a sleek and modern design and development
                            company for creatives and businesses.
                        </p>
                    </div>
                    <form className="flex gap-3.5 items-center" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex pr-3 py-2 max-w-[70%] bg-zinc-950 border-zinc-700 border-[0.5px] border-x-[solid]">
                            <label htmlFor="email-input" className="sr-only">Enter your email</label>
                            <input
                                id="email-input"
                                type="email"
                                placeholder="Enter your email"
                                className="text-base bg-transparent text-white text-opacity-40"
                                aria-label="Enter your email"
                            />
                        </div>
                        <button type="submit" className="px-2 py-1 text-base bg-blue-700 rounded-md shadow-[2px_-2px_30px] shadow-blue-600 text-zinc-300">
                            Contact
                        </button>
                    </form>
                </div>
                <nav className="flex md:gap-4 xl:gap-32 pt-8 max-md:flex-wrap" aria-label="Footer Navigation">
                    <div className="flex flex-col gap-11">
                        <h4 className="text-2xl font-light text-indigo-700">Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/web-development" className="text-xl font-light text-white">Web development</Link></li>
                            <li><Link href="/cloud-services" className="text-xl font-light text-white">Cloud Services</Link></li>
                            <li><Link href="#react" className="text-xl font-light text-white">React and React Native</Link></li>
                            <li><Link href="#about" className="text-xl font-light text-white">About</Link></li>
                            <li><Link href="/contact" className="text-xl font-light text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-11">
                        <h4 className="text-2xl font-light text-indigo-700">Resources</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="#blog" className="text-xl font-light text-white">Blog</Link></li>
                            <li><Link href="#case-studies" className="text-xl font-light text-white">Case Studies</Link></li>
                            <li><Link href="#tutorials" className="text-xl font-light text-white">Tutorials</Link></li>
                            <li><Link href="#faq" className="text-xl font-light text-white">FAQ</Link></li>
                            <li><Link href="#support" className="text-xl font-light text-white">Support</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;