
const BetaRegistration = () => {
    return (
        <section id="beta" className="py-32 relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <span className="text-sky-400 font-bold tracking-widest text-xs uppercase mb-6 block">Mobile First</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Your pocket guide to the wild.
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    Download the Triangle app to discover nearby adventures, manage offline maps, and chat directly with guides.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-3 bg-white text-slate-950 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors">
                        <span className="font-bold text-sm">Download for iOS</span>
                    </button>
                    <button className="flex items-center gap-3 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
                        <span className="font-bold text-sm">Get for Android</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BetaRegistration;
