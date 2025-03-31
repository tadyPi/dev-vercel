import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col gap-2 p-6 rounded-3xl bg-[linear-gradient(180deg,#141414_3.37%,rgba(90,124,247,0.57)_319.31%)] border-[black] border-b-blue-600 border-t-[0.922px] border-x-[solid]">
        <img src={icon} alt="" className="w-[59px] h-[59px]" aria-hidden="true" />
        <h3 className="mt-8 text-2xl text-white">{title}</h3>
        <p className="text-xs text-zinc-400">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const features = [
        {
            icon: "/battery.svg",
            title: "Innovative UX Design",
            description: "User experience design focuses on creating products that provide meaningful and relevant experiences to users. It involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function."
        },
        {
            icon: "/computer-chip.svg",
            title: "Cutting-edge Web Development",
            description: "Web development is all about crafting digital products that deliver valuable and engaging experiences for users. This encompasses the complete journey of obtaining and utilizing the product, covering elements like branding, design, usability, and functionality."
        },
        {
            icon: "/app-grid.svg",
            title: "Mobile App Development",
            description: "Mobile app development focuses on creating digital solutions that provide users with valuable and engaging experiences. This includes the entire process of acquiring and using the app, addressing aspects such as branding, design, user-friendliness, and functionality."
        },
        {
            icon: "/bar-chart.svg",
            title: "Innovative Cloud Solutions",
            description: "Innovative cloud solutions prioritize crafting products that deliver significant and relevant experiences for users. This encompasses the complete journey of obtaining and utilizing the product, covering elements such as branding, design, usability, and functionality."
        },
        {
            icon: "/microphone.svg",
            title: "Web Design",
            description: "Cutting-edge web design focuses on creating products that provide meaningful and impactful experiences for users. This includes every aspect of the user journey, from discovering the product to engaging with it, addressing key factors like branding, aesthetics, user-friendliness, and performance."
        },
        {
            icon: "/computer-chip.svg",
            title: "Comprehensive Support",
            description: "This encompasses all stages of the user journey, from product discovery to active engagement, while considering essential elements such as branding, visual appeal, usability, and overall performance."
        }
    ];

    return (
        <section className="flex flex-col px-6 lg:px-28 mt-20 lg:mt-32 gap-10 items-center" aria-labelledby="features-title">
            <div className="flex flex-col gap-10 items-center max-w-[872px]">
                <div className="flex flex-col gap-10 w-full">
                    <div className="flex gap-1.5 justify-center items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" aria-hidden="true"></div>
                        <span className="text-xl text-white">Features</span>
                    </div>
                    <h2 id="features-title" className="text-6xl leading-tight text-center max-md:text-5xl max-sm:text-3xl">
                        <span className="text-white">Utilizing a range of technologies to create </span>
                        <span className="text-[#d98df0]">dynamic and engaging websites!</span>
                    </h2>
                    <p className="text-base text-center text-zinc-400">
                        We design and develop custom web apps
                    </p>
                </div>
                <p className="text-base text-center text-white">
                    Using Html CSS and JavaScript.
                </p>
                <button
                    className="px-4 py-3 text-2xl text-gray-200 bg-blue-600 rounded-2xl shadow-[2px_-2px_50px] shadow-blue-600"
                    // onClick={onGetInTouch}
                    aria-label="Get in Touch"
                >
                    Get in Touch
                </button>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-7 max-w-[1203px] max-md:grid-cols-2 max-sm:grid-cols-1">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;