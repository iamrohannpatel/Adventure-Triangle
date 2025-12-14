import { useState } from 'react';
import { saveDummyData } from '../utils/formHandler';

const BetaRegistration = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveDummyData({ email }, 'BetaRegistration');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="beta" className="py-32 relative border-t border-white/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto mb-16">
                    <span className="text-sky-400 font-extrabold tracking-widest text-xs uppercase mb-6 block drop-shadow-sm">
                        Early Access
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-xl">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Beta.</span>
                    </h2>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md">
                        Be the first to explore the Adventure Triangle app. Sign up now to secure your spot and get exclusive rewards when we launch.
                    </p>
                </div>

                <div className="glass max-w-xl mx-auto p-2 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Form Container */}
                    <div className="bg-slate-950/50 rounded-xl p-8 md:p-10 backdrop-blur-md">
                        {submitted ? (
                            <div className="py-8 animate-fade-in-up">
                                <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center text-sky-400 mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Welcome Aboard!</h3>
                                <p className="text-slate-400">You've been added to the priority list.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
                                <p className="text-slate-400 text-sm mb-8">Enter your email to join the waitlist.</p>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="email"
                                        required
                                        className="flex-1 bg-slate-900/80 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-sky-500 transition-all placeholder-slate-600"
                                        placeholder="your@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/25 transition-all transform hover:scale-[1.02]"
                                    >
                                        Register Now
                                    </button>
                                </div>
                                <p className="text-xs text-slate-500 mt-6">
                                    We respect your privacy. No spam, ever.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Simple text placeholders for partners/trust, can be replaced with SVGs later */}
                    {['TechCrunch', 'Adventure Mag', 'Travel Weekly', 'The Explorer'].map((brand, i) => (
                        <span key={i} className="text-slate-400 font-bold text-xl uppercase tracking-widest">{brand}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BetaRegistration;
