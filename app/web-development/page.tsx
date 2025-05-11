import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const WebDevelopment: React.FC = () => {
    // const handleGetInTouch = () => {
    //   console.log('Get in touch clicked');
    // };

    // const handleConnectWithUs = () => {
    //   console.log('Connect with us clicked');
    // };

    // const handleViewServices = () => {
    //   console.log('View services clicked');
    // };

    return (
        <div className="flex flex-col bg-black min-h-screen">
            <Header /*onGetInTouch={handleGetInTouch}*/ />
            <main>
                <Hero /*onConnectWithUs={handleConnectWithUs}*/ />
                <About /*onGetInTouch={handleGetInTouch}*/ />
                <Features />
                <FAQ />
                <CallToAction /*onViewServices={handleViewServices}*/ />
            </main>
            <Footer />
            <div className="mx-auto h-px bg-[linear-gradient(90deg,#141414_0%,#6C6C6C_49.45%,#131313_100%)] w-full"></div>
        </div>
    );
};

export default WebDevelopment;