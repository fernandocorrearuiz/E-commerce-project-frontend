import { useState, useEffect } from "react";
import axios from "axios";

import HeroSection from "../components/_App/HeroSection";
import CTA from "../components/_App/CTA";
import Footer from "../components/_App/Footer";
import Pricing from "../components/Pricing/Pricing";
import NavBar from "../components/_App/NavBar";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";

const Home = () => {
  const [products, setProducts] = useState({});
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(async () => {
    const products = await axios.get(`http://localhost:3001/products`);
    // console.log("Products:", products.data);
    setProducts(products.data);
  }, []);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <NavBar onShowCart={showCartHandler} />
      <main>
        <HeroSection />
        <Pricing
          rollersPrice={products[0]?.price}
          slidersPrice={products[1]?.price}
        />
        <CTA />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default Home;
