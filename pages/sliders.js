import NavBar from "../components/_App/NavBar";
import Footer from "../components/_App/Footer";

import { useEffect } from "react";
import axios from "axios";

import styles from "../styles/SlidersDetails.module.css";

const SlidersInfo = () => {
  useEffect(async () => {
    const products = await axios.get(`http://localhost:3001/products`);
    console.log("Products:", products.data);
  });

  return (
    <div>
      <NavBar />
      <div className={styles["section-sliders"]}>
        <div>This is Sliders</div>
      </div>
      <Footer />
    </div>
  );
};

export default SlidersInfo;
