import { useState } from 'react';

const LaunchEvent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', city: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration submitted:', formData);
        setSubmitted(true);
        // Reset after 3 seconds for demo purposes
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="launch" className="py-32 relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-lg text-center">

                <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-6 block">
                    Exclusive Access
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Global Launch Event.
                </h2>
                <p className="text-slate-400 mb-12 text-lg">
                    January 26, 2026 • Toronto, Canada
                </p>

                {submitted ? (
                    <div className="glass rounded-2xl p-8 animate-fade-in-up">
                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                        <p className="text-slate-400">We'll see you in Toronto.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 text-left shadow-2xl space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all"
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all"
                                placeholder="jane@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">City</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:bg-slate-900 transition-all"
                                placeholder="Toronto"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="w-full py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-purple-50 transition-colors mt-4">
                            Reserve My Spot
                        </button>
                    </form>
                )}

                <p className="text-xs text-slate-600 mt-8">
                    Limited to 500 attendees. Invitations are non-transferable.
                </p>
            </div>
        </section>
    );
};

export default LaunchEvent;
