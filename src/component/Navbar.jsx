import { useState, useEffect } from "react";
import logo from "../assets/logo/white_logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = ['Home', 'About', 'Mission', 'Campaign', 'Partner'];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="container mx-auto px-6">
                <div className={`mx-auto max-w-7xl rounded-full transition-all duration-500 border ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-white/10 shadow-lg pl-6 pr-2 py-2' : 'bg-transparent border-transparent p-0'}`}>
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 group relative z-50">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img src={logo} alt="Adventure Triangle" className="h-10 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <span className="text-lg font-bold tracking-tighter text-white opacity-0 md:opacity-100 -ml-4 md:ml-0 transition-all duration-300 hidden md:block group-hover:tracking-wide">
                                Adventure Triangle
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                    className="relative px-5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-300 group overflow-hidden"
                                >
                                    <span className="relative z-10">{item}</span>
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
                                </a>
                            ))}
                        </div>

                        {/* CTA Button (Desktop) */}
                        <div className="hidden md:block">
                            <a href="#beta" className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-white text-slate-950 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2">
                                <span className="relative z-10 group-hover:-translate-y-[150%] transition-transform duration-300 block">Join Beta</span>
                                <span className="absolute left-0 right-0 top-full group-hover:-translate-y-[250%] transition-transform duration-300 text-center block w-full">Let's Go</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden relative z-50 p-2 text-white focus:outline-none w-10 h-10 flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between relative">
                                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute left-0 ${mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
                                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute left-0 ${mobileMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
                            </div>
                        </button>

                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-slate-950 z-40 flex items-center justify-center transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto clip-circle-150' : 'opacity-0 pointer-events-none clip-circle-0'}`}>

                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
                        {navLinks.map((item, index) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 hover:to-white hover:scale-105 transition-all duration-300 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ transitionDelay: `${100 + index * 50}ms` }}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#beta"
                            className={`mt-8 px-12 py-5 bg-white text-slate-950 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ transitionDelay: `${navLinks.length * 50 + 150}ms` }}
                        >
                            Join Beta
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
