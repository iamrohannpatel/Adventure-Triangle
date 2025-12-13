import { useState } from 'react';

const PartnerCTA = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        website: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="partner" className="py-32 relative border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-blue-500/5 blur-[120px] pointer-events-none rounded-full"></div>

                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">

                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                            For Operators
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Impact</span>
                        </h2>

                        <p className="text-white text-lg md:text-xl font-semibold mb-8 leading-relaxed drop-shadow-md">
                            Join the Adventure Triangle network. We connect verified operators with a global audience of authentic travelers who crave unique experiences.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Access to a global audience of adventure seekers',
                                'Seamless booking and payment processing',
                                'Dedicated support and marketing tools',
                                'Verified reviews and reputation building'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-white font-medium text-lg">
                                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/50">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Inline Form */}
                    <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                        {/* Decorative top sheen */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <h3 className="text-2xl font-bold text-white mb-6">Application Form</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Company / Operator Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="e.g. Arctic Expeditions Ltd."
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Contact Person</label>
                                <input
                                    type="text"
                                    name="contactPerson"
                                    required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Full Name"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Business Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="contact@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Website (Optional)</label>
                                <input
                                    type="url"
                                    name="website"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="https://"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-[1.02] mt-4"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PartnerCTA;
