import { useState, useEffect } from "react";
import logo from "../assets/logo/white_logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ['Home', 'About', 'Mission', 'Campaign', 'Partner'];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group relative z-50">
                    <img src={logo} alt="Adventure Triangle" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    <span className="text-lg font-bold tracking-tighter text-white opacity-0 md:opacity-100 -ml-4 md:ml-0 transition-all duration-300 md:group-hover:tracking-widest hidden md:block">
                        Adventure Triangle
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center p-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                            className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#beta" className="ml-2 px-6 py-2 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                        Join Beta
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col items-center gap-8">
                        {navLinks.map((item, index) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                className="text-3xl font-bold text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#beta"
                            className="mt-8 px-10 py-4 bg-white text-slate-950 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
                            onClick={() => setMobileMenuOpen(false)}
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
