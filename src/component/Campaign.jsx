const Campaign = () => {
    return (
        <section id="campaign" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-50"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div className="text-left">
                        <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block drop-shadow-sm">
                            Join the Movement
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
                            Share Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                #Adventure
                            </span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg font-medium">
                            From the highest peaks to the deepest oceans, our community is capturing moments that define the human spirit. Tag us to be featured.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105">
                                View Gallery
                            </button>
                            <button className="px-8 py-4 border border-white/10 glass text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105">
                                Follow on Instagram
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-mono">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs text-white">
                                        👤
                                    </div>
                                ))}
                            </div>
                            <span>+50k Adventurers joined</span>
                        </div>
                    </div>

                    {/* Visual Masonry Grid Side */}
                    <div className="grid grid-cols-2 gap-4 h-[600px] relative">
                        {/* Decorative blur behind grid */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl -z-10"></div>

                        <div className="space-y-4 pt-12">
                            <div className="h-64 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 glass border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 flex items-end p-6 group cursor-pointer shadow-lg overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <span className="text-white font-bold opacity-70 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 relative z-10">Alpine Trekking</span>
                            </div>
                            <div className="h-48 rounded-2xl bg-slate-800/50 glass border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 flex items-end p-6 group cursor-pointer shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <span className="text-white font-bold opacity-70 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 relative z-10">Deep Diving</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-48 rounded-2xl bg-slate-800/50 glass border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 flex items-end p-6 group cursor-pointer shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <span className="text-white font-bold opacity-70 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 relative z-10">Sky High</span>
                            </div>
                            <div className="h-80 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 glass border border-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-500 flex items-end p-6 group cursor-pointer shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <span className="text-white font-bold opacity-70 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 relative z-10">Forest Trails</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Campaign;
