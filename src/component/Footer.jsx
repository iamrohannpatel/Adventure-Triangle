const Footer = () => {
    return (
        <footer className="glass border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-lg group-hover:rotate-12 transition-transform"></div>
                            <span className="text-2xl font-bold text-white tracking-tighter">TRIANGLE.</span>
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Connecting the world through adventure. Join us in exploring the
                            limits of human potential and natural beauty.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Platform</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Partnerships</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/10 text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Adventure Triangle. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
