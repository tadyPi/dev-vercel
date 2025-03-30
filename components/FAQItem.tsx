"use client";

import React from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className={`gap-4 pb-4 text-base text-white border-b ${isOpen ? 'border-white' : 'border-zinc-500'}`}>
        <button
            className="w-full text-left focus:outline-none"
            onClick={onClick}
            aria-expanded={isOpen}
        >
            {question}
        </button>
        {isOpen && <p className="mt-2">{answer}</p>}
    </div>
);

export default FAQItem;