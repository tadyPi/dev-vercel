"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
// import Image from "next/image";
import "../globals.css";
// import Script from 'next/script';
import Header from '@/components/Header';
// import Footer from "@/components/ui/Footer";
// import Navbar from "@/components/ui/navbar";

export default function Contact() {
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mailtoLink = `mailto:hello@loadofpixels.com?subject=Contact%20Us&body=Email:%20${encodeURIComponent(email)}`;
        window.location.href = mailtoLink; // Triggers the user's default email client with the prefilled email content
    };

    const handleCallUs = () => {
        window.location.href = 'tel:07521414638';
    };

    return (
        <>
            {/* Add Google Tag script
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-P44EG1H7XP"
            ></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P44EG1H7XP');
        `}
            </Script> */}
            <Header />
            <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-black">
                <div className="bg-black py-24 sm:py-32 rounded-md drop-shadow-xl">
                    <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-[2rem] font-bold leading-7 text-indigo-700 font-Poppins">
                                Contact Us
                            </h2>

                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 font-Open_sans sm:text-6xl gradient-text">
                                We are here to help you.
                            </p>

                            <p className="mt-6 text-lg leading-8 text-gray-400">
                                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                            </p>
                        </div>

                        {/* Updated form with dynamic mailto link */}
                        <form className="mt-10 w-full max-w-lg" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <Button asChild>
                                    <button
                                        className="px-4 py-3 text-lg text-gray-200 bg-gradient-to-b from-zinc-500/10 to-indigo-700/70 border border-zinc-50/10 rounded-xl shadow-[2px_-2px_70px]
                    shadow-indigo-700 max-md:hidden max-md:text-lg max-sm:text-base hover:border-indigo-700/70 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600/70 hover:shadow-[2px_2px_10px]"
                                        type="submit"
                                    >
                                        Send Email
                                    </button>
                                </Button>
                            </div>
                        </form>

                        {/* Added Contact Phone Number Button */}
                        <div className="mt-6 text-lg leading-8 text-gray-400">
                            <p>If you prefer to speak with us directly, get in touch:</p>
                            <div className="mt-2 font-bold text-indigo-700">
                                <Button asChild>
                                    <button
                                        className="px-4 py-3 text-lg text-gray-200 bg-gradient-to-b from-zinc-500/10 to-indigo-700/70 border border-zinc-50/10 rounded-xl shadow-[2px_-2px_70px]
                    shadow-indigo-700 max-md:hidden max-md:text-lg max-sm:text-base hover:border-indigo-700/70 hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600/70 hover:shadow-[2px_-2px_10px] hover:shadow-indigo-700"
                                        onClick={handleCallUs}
                                    >
                                        Call Us
                                    </button>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}