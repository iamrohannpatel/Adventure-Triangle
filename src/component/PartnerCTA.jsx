const PartnerCTA = () => {
    return (
        <section id="partner" className="py-32 relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center relative">

                    {/* Glow effect behind the card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 blur-3xl opacity-30 pointer-events-none"></div>

                    <div className="relative glass rounded-3xl p-12 md:p-16 overflow-hidden">

                        {/* Decorative top sheen */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                            For Operators
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Impact</span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                            Join the Adventure Triangle network. We connect verified operators with a global audience of authentic travelers.
                        </p>

                        <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-slate-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Partner with Us
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerCTA;
