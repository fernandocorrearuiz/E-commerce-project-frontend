import NavBar from "../components/_App/NavBar";
import Footer from "../components/_App/Footer";

import styles from "../styles/RollersDetails.module.css";

const RollersInfo = () => {
  return (
    <div>
      <NavBar />
      <div className={styles["section-rollers"]}>
        <div>This is Rollers</div>
      </div>
      <Footer />
    </div>
  );
};

export default RollersInfo;
