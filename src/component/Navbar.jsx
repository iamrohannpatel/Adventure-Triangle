import { useState, useEffect } from "react";
import logo from "../assets/logo/white_logo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <a href="#" className="flex items-center gap-2 group">
                    <img src={logo} alt="Adventure Triangle" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                    <span className="text-xl font-bold tracking-tighter text-white opacity-0 md:opacity-100 -ml-4 md:ml-0 transition-all duration-300 md:group-hover:tracking-widest">
                        Adventure Triangle
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-10 p-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
                    {['Mission', 'About', 'Campaign'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-1">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
