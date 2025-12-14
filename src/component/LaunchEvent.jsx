import { useState } from 'react';
import { saveDummyData } from '../utils/formHandler';

const LaunchEvent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', city: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveDummyData(formData, 'LaunchEvent');
        setSubmitted(true);
        // Reset after 3 seconds for demo purposes
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="launch" className="py-32 relative border-t border-white/5 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Event Details */}
                    <div>
                        <span className="text-purple-400 font-extrabold tracking-widest text-xs uppercase mb-6 block drop-shadow-sm">
                            Exclusive Access
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-xl">
                            Global <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Launch Event.</span>
                        </h2>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <div className="glass p-3 rounded-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300 border border-white/10 group bg-purple-900/10">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 shadow-inner shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-base">📅</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider leading-none mb-0.5">Date</p>
                                    <p className="text-white text-sm font-bold leading-tight">Jan 26, 2026</p>
                                </div>
                            </div>

                            <div className="glass p-3 rounded-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300 border border-white/10 group bg-blue-900/10">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 shadow-inner shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-base">📍</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-wider leading-none mb-0.5">Location</p>
                                    <p className="text-white text-sm font-bold leading-tight">Toronto, Canada</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-purple-200/80 font-medium max-w-lg">
                            Be among the first to experience the future of adventure. Limited invitations available for early supporters.
                        </p>
                    </div>

                    {/* Right Column: Registration Card */}
                    <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
                        {/* Decorative sheen */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        {submitted ? (
                            <div className="text-center py-12 animate-fade-in-up">
                                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-6">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
                                <p className="text-slate-400">We'll see you in Toronto.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-white mb-6">Reserve Your Spot</h3>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-slate-600"
                                            placeholder="Rohan Patel"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-slate-600"
                                            placeholder="rohan@gmail.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">City</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-slate-600"
                                            placeholder="Toronto"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>

                                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-[1.02] mt-4">
                                        Reserve My Spot
                                    </button>
                                </form>
                                <p className="text-xs text-slate-500 mt-6 text-center">
                                    Limited to 500 attendees. Invitations are non-transferable.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaunchEvent;
