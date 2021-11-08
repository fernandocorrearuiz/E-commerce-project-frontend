import NavBar from "../components/_App/NavBar";
import Footer from "../components/_App/Footer";

import styles from "../styles/SlidersDetails.module.css";

const SlidersInfo = () => {
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
