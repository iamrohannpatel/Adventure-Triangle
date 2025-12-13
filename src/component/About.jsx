const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Subtle background gradient mesh */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <span className="text-blue-400 font-extrabold tracking-widest text-sm uppercase mb-6 block shadow-blue-500/50 drop-shadow-sm">
                            About Adventure Triangle
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-none tracking-tight drop-shadow-xl">
                            Building the Global <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Adventure Ecosystem.</span>
                        </h2>
                        <p className="text-white text-xl leading-relaxed mb-8 font-semibold drop-shadow-md">
                            Adventure Triangle is more than a booking platform. We are the digital bridge connecting
                            thrill-seekers with local experts and exclusive events worldwide.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group glass p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-3xl">🌍</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-extrabold text-2xl mb-2">Authentic Connections</h3>
                                    <p className="text-slate-300 font-medium text-base">Direct access to verified operators, cutting out the middlemen.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group glass p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-3xl">🛡️</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-extrabold text-2xl mb-2">Safety First</h3>
                                    <p className="text-slate-300 font-medium text-base">Every experience is vetted for safety standards and insurance compliance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Card */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-50"></div>
                        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-2">The Trinity</h3>
                            <p className="text-slate-400 text-sm mb-8">Bringing Water, Air, and Land Adventures Together</p>

                            <div className="space-y-4">
                                {/* Water Item */}
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            🌊
                                        </div>
                                        <span className="font-medium text-white">Water</span>
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Depth</span>
                                </div>

                                {/* Air Item */}
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                            🦅
                                        </div>
                                        <span className="font-medium text-white">Air</span>
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Altitude</span>
                                </div>

                                {/* Land Item */}
                                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            🏔️
                                        </div>
                                        <span className="font-medium text-white">Land</span>
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Terrain</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                <span className="text-xs text-slate-500 font-mono">EST. 2025 • GLOBAL ADVENTURE NETWORK</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
