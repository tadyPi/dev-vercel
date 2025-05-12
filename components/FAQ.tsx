"use client";

import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems = [
        {
            question: "What does Load of Pixels do?",
            answer: "Load of Pixels specializes in web development, UX design, and cloud services, creating unique digital experiences for businesses."
        },
        {
            question: "What is Web Development?",
            answer: "Web development is the process of building and maintaining websites. It involves front-end (client-side) and back-end (server-side) development to create functional and visually appealing web applications."
        },
        {
            question: "What kind of support is available from Load of Pixels?",
            answer: "We offer comprehensive support throughout the development process, including post-launch maintenance, updates, and technical assistance to ensure your digital product remains effective and up-to-date."
        },
        {
            question: "What is React and React Native?",
            answer: "React is a JavaScript library for building user interfaces for web applications. React Native is a framework for building mobile applications using React and native components, allowing for cross-platform development."
        },
        {
            question: "What is UI/UX design?",
            answer: "UI (User Interface) design focuses on the visual elements of a digital product, while UX (User Experience) design ensures the overall interaction with the product is intuitive and satisfying for users."
        },
        {
            question: "Why choose Load of Pixels?",
            answer: "Load of Pixels combines cutting-edge technology with creative design to deliver high-quality, user-centric digital solutions. Our experienced team ensures your project is executed with precision and care."
        }
    ];

    return (
        <section className="flex mt-20 lg:mt-40 px-6 lg:px-0 lg:pl-48 gap-4 items-start max-md:flex-col" aria-labelledby="faq-title">
            <div className="flex flex-col gap-4 max-w-[701px]">
                <div className="flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" aria-hidden="true"></div>
                    <span className="text-xl text-white">FAQ</span>
                </div>
                <h2 id="faq-title" className="text-6xl leading-tight max-md:text-5xl max-sm:text-3xl">
                    <span className="text-white">Frequently </span>
                    <span className="text-indigo-700">Asked Questions</span>
                </h2>
                <p className="text-base text-white max-w-[493px]">
                    Have questions? Our FAQ section has you covered with quick
                    answers to the most common inquiries.
                </p>
            </div>
            <div className="flex flex-col gap-12 max-w-[566px]">
                {faqItems.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;