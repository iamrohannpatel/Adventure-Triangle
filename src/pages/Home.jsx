import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Mission from "../component/Mission";
import Campaign from "../component/Campaign";
import PartnerCTA from "../component/PartnerCTA";
import LaunchEvent from "../component/LaunchEvent";
import BetaRegistration from "../component/BetaRegistration";
import Socials from "../component/Socials";
import Footer from "../component/Footer";
import CreativeBackground from "../component/common/CreativeBackground";

const Home = () => {
    return (
        <div className="relative min-h-screen">
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <About />
                <Mission />
                <Campaign />
                <PartnerCTA />
                <LaunchEvent />
                <BetaRegistration />
                <Socials />
                <Footer />
            </div>
        </div>
    );
};

export default Home;    