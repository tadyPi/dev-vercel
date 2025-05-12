"use client";

import Link from 'next/link';
import React from 'react';

// interface AboutProps {
//     onGetInTouch: () => void;
// }

const AboutWebDev: React.FC/*<AboutProps>*/ = (/*{ onGetInTouch }*/) => {
    return (
        <section className="flex gap-2 lg:gap-32 px-6 lg:px-40 lg:pb-28 items-center max-md:flex-col max-md:gap-2" aria-labelledby="about-title">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/99280f9bf1ffc06da3c6a119c705d9003382dcd5" alt="About Load of Pixels" className="max-w-full mt-4 border-none h-auto" />
            <div className="flex flex-col gap-7 max-w-[701px]">
                <div className="flex flex-col sm:mt-9 lg:mt-20 gap-6">
                    <div className="flex gap-1.5 items-center">
                        <div className="w-1.5 h-1.5 hidden lg:block rounded-full bg-zinc-300" aria-hidden="true"></div>
                        <span className="text-xl text-white">Cloud and Web Development.</span>
                    </div>
                    <h2 id="about-title" className="text-[2.72em] leading-tight max-sm:text-3xl">
                        <span className="text-white">With the power of <span className="text-[#54a444] font-semibold">Node.js</span> I develop scalable and efficient server-side applications.</span>
                    </h2>
                    {/*  */}
                    <p className="text-base sm:text-3xl lg:text-lg text-zinc-300 max-w-full">
                        Using JavaScript HTML and CSS I employ these foundational languages to craft interactive and visually, appealing user interfaces.
                        Using React and Next.js, I build robust and responsive web applications, providing seamless user experiences across various devices.
                    </p>
                </div>
                <div className="flex flex-col gap-4 max-w-full">
                    <div className="flex gap-3.5 items-center">
                        <img src="/Icon-Container.png" alt="" className="w-[35.151px] h-[35.667px]" aria-hidden="true" />
                        <span className="text-sm sm:text-2xl lg:text-base text-white">Web Development and Cloud Services.</span>
                    </div>
                    <div className="flex gap-3.5 items-center">
                        <img src="/Icon-Container.png" alt="" className="w-[35.151px] h-[35.667px]" aria-hidden="true" />
                        <span className="text-sm sm:text-2xl lg:text-base text-white">Google UX Design.</span>
                    </div>
                    <div className="flex gap-3.5 items-center">
                        <img src="/Icon-Container.png" alt="" className="w-[35.151px] h-[35.667px]" aria-hidden="true" />
                        <span className="text-sm sm:text-2xl lg:text-base text-white">Figma Designer.</span>
                    </div>
                </div>
                <div className="flex gap-16 items-center max-sm:flex-col max-sm:gap-8">
                    <Link href="/"
                        className="px-4 py-3 text-lg text-gray-200 bg-gradient-to-b from-zinc-500/10 to-indigo-700/70 border border-zinc-50/10 rounded-xl shadow-[2px_-2px_70px]
                    shadow-indigo-700 max-md:hidden max-md:text-lg max-sm:text-base hover:border-indigo-700/70 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600/70 hover:shadow-[2px_-2px_50px] hover:shadow-indigo-700"
                        // onClick={onGetInTouch}
                        aria-label="Get in Touch"
                    >
                        Get in Touch
                    </Link>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1.5 items-center" aria-label="5 star rating">
                            {[...Array(5)].map((_, index) => (
                                <img key={index} src="/star.svg" alt="" className="w-[24] h-[24]" aria-hidden="true" />
                            ))}
                        </div>
                        <span className="text-sm text-white">5 star Google Business rating.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWebDev;