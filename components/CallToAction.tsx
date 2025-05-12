"use client";

import Link from 'next/link';
import React from 'react';

// interface CallToActionProps {
//     onViewServices: () => void;
// }

const CallToAction: React.FC/*<CallToActionProps>*/ = (/*{ onViewServices }*/) => {
    return (
        <section className="flex flex-col gap-24 items-center mx-4 lg:mx-52 mt-28 px-44 pt-36 pb-20 bg-[linear-gradient(292deg,#0055FE_-16.87%,#000_33.43%,#000_46.81%,#0055FE_104.03%)] rounded-[59px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-10" aria-labelledby="cta-title">
            <div className="flex flex-col gap-4 items-center max-w-[931px]">
                <div className="flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" aria-hidden="true"></div>
                    <span className="text-xl text-white">Join Us Now</span>
                </div>
                <h2 id="cta-title" className="text-6xl leading-tight text-center max-md:text-5xl max-sm:text-3xl">
                    <span className="text-white">Each Project we Undertake </span>
                    <span className="text-indigo-700">is a Unique Opportunity.</span>
                </h2>
                <p className="text-base text-center text-white">
                    Ready to take the next step? Join us now and start transforming
                    your vision into reality with expert support.
                </p>
            </div>
            <Link href="/"
                className="px-4 py-3 text-lg text-gray-200 bg-gradient-to-b from-zinc-500/10 to-indigo-700/70 border border-zinc-50/10 rounded-xl shadow-[2px_-2px_70px]
                    shadow-indigo-700 max-md:hidden max-md:text-lg max-sm:text-base hover:border-indigo-700/70 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600/70 hover:shadow-[2px_0px_20px] hover:shadow-indigo-700/50"
                // onClick={onGetInTouch}
                aria-label="Get in Touch"
            >
                Get in Touch
            </Link>
        </section>
    );
};

export default CallToAction;