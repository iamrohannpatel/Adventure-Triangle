
const Mission = () => {
    return (
        <section id="mission" className="py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                        Our Mission
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Unlock the World.
                    </h2>
                    <p className="text-white text-lg md:text-xl font-semibold max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        We are categorizing the planet's most thrilling experiences into three core elements.
                        Choose your domain.
                    </p>
                </div>

                {/* 3-Card Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Water Adventures */}
                    <div className="group p-8 rounded-2xl glass hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">🌊</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Water Adventures</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            From deep-sea diving in the Maldives to kayaking through Norwegian fjords.
                        </p>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Explore Water &rarr;
                        </span>
                    </div>

                    {/* Air Adventures */}
                    <div className="group p-8 rounded-2xl glass hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">🦅</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Air Adventures</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Skydiving over Dubai, paragliding in the Swiss Alps, and hot air ballooning in Cappadocia.
                        </p>
                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Explore Air &rarr;
                        </span>
                    </div>

                    {/* Land Adventures */}
                    <div className="group p-8 rounded-2xl glass hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">🏔️</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Land Adventures</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Trekking Kilimanjaro, safaris in the Serengeti, and rock climbing in Yosemite.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Explore Land &rarr;
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Mission;
