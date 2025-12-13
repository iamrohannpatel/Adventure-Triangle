const Socials = () => {
    return (
        <section className="py-12 glass border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-white font-semibold mb-8">Follow Our Journey</h3>
                <div className="flex justify-center gap-8">
                    {['Facebook', 'LinkedIn', 'Instagram', 'TikTok'].map((platform) => (
                        <a key={platform} href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-lg font-medium">
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Socials;
