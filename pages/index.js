import HeroSection from "../components/_App/HeroSection";
import CTA from "../components/_App/CTA";
import Footer from "../components/_App/Footer";
import Pricing from "../components/Pricing/Pricing";
import NavBar from "../components/_App/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
