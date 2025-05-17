import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="w-full">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-xl font-medium text-white hover:text-indigo-400">
                    {question}
                </h3>
                <span className="text-white ml-4">
                    {isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                </span>
            </button>
            {isOpen && (
                <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
};

export default FAQItem;