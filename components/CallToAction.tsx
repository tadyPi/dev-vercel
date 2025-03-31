"use client";

import React from 'react';

// interface CallToActionProps {
//     onViewServices: () => void;
// }

const CallToAction: React.FC/*<CallToActionProps>*/ = (/*{ onViewServices }*/) => {
    return (
        <section className="flex flex-col gap-24 items-center mx-4 lg:mx-52 mt-28 px-44 pt-36 pb-20 bg-[linear-gradient(292deg,#0055FE_-6.87%,#000_33.43%,#000_66.81%,#0055FE_104.03%)] rounded-[59px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-10" aria-labelledby="cta-title">
            <div className="flex flex-col gap-4 items-center max-w-[931px]">
                <div className="flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" aria-hidden="true"></div>
                    <span className="text-xl text-white">Join Us Now</span>
                </div>
                <h2 id="cta-title" className="text-6xl leading-tight text-center max-md:text-5xl max-sm:text-3xl">
                    <span className="text-white">Each Project we Undertake </span>
                    <span className="text-[#d98df0]">is a Unique Opportunity.</span>
                </h2>
                <p className="text-base text-center text-white">
                    Ready to take the next step? Join us now and start transforming
                    your vision into reality with expert support.
                </p>
            </div>
            <button
                className="px-4 py-3 text-2xl text-gray-200 bg-blue-600 rounded-2xl shadow-[2px_-2px_50px] shadow-blue-600"
                // onClick={onViewServices}
                aria-label="View Services"
            >
                View Services
            </button>
        </section>
    );
};

export default CallToAction;