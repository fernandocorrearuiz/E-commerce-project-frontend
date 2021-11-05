import HeroSection from "../components/_App/HeroSection";
import CTA from "../components/_App/CTA";
import Footer from "../components/_App/Footer";
import Pricing from "../components/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>

      <main>
        <HeroSection />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
