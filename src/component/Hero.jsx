
import { useEffect, useState } from "react";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Badge/Tag */}


                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-8 opacity-0 animate-fade-in-up delay-100 drop-shadow-2xl leading-tight">
                    Adventure Is Not a Trip.<br />
                    <span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">It’s a Feeling</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up delay-200 font-semibold drop-shadow-lg">
                    Adventure Triangle brings water, air, and land experiences together into one powerful global ecosystem.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up delay-300">
                    <a href="#partner" className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] animate-glow">
                        <span className="relative z-10">Join as a Partner</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </a>

                    <a href="#beta" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 backdrop-blur-sm text-white font-semibold tracking-wide transition-all hover:border-white/50">
                        Explore Beta
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-70">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;


