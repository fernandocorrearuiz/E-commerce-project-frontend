import HeroSection from "../components/_App/HeroSection";
import CTA from "../components/_App/CTA";
import Footer from "../components/_App/Footer";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>

      <main>
        <HeroSection />
        <CTA />
        <Footer />
      </main>

      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
