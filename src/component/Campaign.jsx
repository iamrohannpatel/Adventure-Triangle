const Campaign = () => {
    return (
        <section id="campaign" className="py-20 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-sky-500/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="glass rounded-3xl p-12 max-w-5xl mx-auto">
                    <h2 className="text-xl font-bold tracking-[0.3em] text-blue-400 mb-4 uppercase">Global Campaign</h2>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 italic tracking-tighter transform -rotate-2 drop-shadow-lg">
                        #FeelTheAdventure
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Share your journey. Inspire the world. Tag us to be featured in our monthly showcase.
                    </p>
                    <button className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition shadow-xl hover:scale-105 duration-300">
                        View Gallery
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Campaign;
