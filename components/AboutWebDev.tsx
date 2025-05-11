"use client";

import React from 'react';

// interface AboutProps {
//     onGetInTouch: () => void;
// }

const AboutWebDev: React.FC/*<AboutProps>*/ = (/*{ onGetInTouch }*/) => {
    return (
        <section className="flex gap-2 lg:gap-32 px-6 lg:px-40 lg:pb-28 items-center max-md:flex-col max-md:gap-2" aria-labelledby="about-title">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/99280f9bf1ffc06da3c6a119c705d9003382dcd5" alt="About Load of Pixels" className="max-w-full mt-4 border-none h-auto" />
            <div className="flex flex-col gap-14 max-w-[701px]">
                <div className="flex flex-col sm:mt-9 lg:mt-20 gap-10">
                    <div className="flex gap-1.5 items-center">
                        <div className="w-1.5 h-1.5 hidden lg:block rounded-full bg-zinc-300" aria-hidden="true"></div>
                        <span className="text-xl text-white">About Load of Pixels</span>
                    </div>
                    <h2 id="about-title" className="text-[3.2em] leading-tight max-md:text-5xl max-sm:text-3xl">
                        <span className="text-white">Exceptional user experiences by following a </span>
                        <span className="text-[#d98df0]">meticulous design process!</span>
                    </h2>
                    <p className="text-base sm:text-3xl lg:text-lg text-zinc-300 max-w-full">
                        Delivering high-quality web development, with on-demand UX
                        design with accessibility and precision.<br />
                        <br />
                        Elevate your brand
                        effortlessly, with design and development from <span className="sm:text-3xl lg:text-lg text-[#d98df0] font-semibold">Load of Pixels</span>.
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
                    <button
                        className="px-4 py-3 text-2xl text-gray-200 bg-blue-600 rounded-2xl
                        hover:bg-blue-700 hover:shadow-[2px_-2px_50px] shadow-blue-600
                        focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 
                        shadow-[2px_-2px_50px]"
                        // onClick={onGetInTouch}
                        aria-label="Get in Touch"
                    >
                        Get in Touch
                    </button>
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