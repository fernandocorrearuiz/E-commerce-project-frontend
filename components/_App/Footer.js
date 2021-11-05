import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div
          className={`${styles.container} ${styles.grid} ${styles["grid--footer"]}`}
        >
          <div className={styles["logo-col"]}>
            <a href="#" className={styles["footer-logo"]}>
              <img
                className={styles.logo}
                alt="Sneakers logo"
                src="/logo.svg"
              />
            </a>

            {/* <ul className={styles["social-links"]}>
              <li>
                <a className={styles["footer-link"]} href="#">
                  <ion-icon
                    className={styles["social-icon"]}
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  <ion-icon
                    className={styles["social-icon"]}
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  <ion-icon
                    className={styles["social-icon"]}
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul> */}

            <p className={styles.copyright}>
              Copyright &copy; 2021 by SnEaKeRs, Inc. All rights reserved.
            </p>
          </div>
          <div className={styles["address-col"]}>
            <p className={styles["footer-heading"]}>Contact us</p>
            <address className={styles.contacts}>
              <p className={styles.address}>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className={styles["footer-link"]} href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a
                  className={styles["footer-link"]}
                  href="mailto:info@sneakers.com"
                >
                  info@sneakers.com
                </a>
              </p>
            </address>
          </div>
          <nav className={styles["nav-col"]}>
            <p className={styles["footer-heading"]}>Account</p>
            <ul className={styles["footer-nav"]}>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Create account
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className={styles["nav-col"]}>
            <p className={styles["footer-heading"]}>Company</p>
            <ul className={styles["footer-nav"]}>
              <li>
                <a className={styles["footer-link"]} href="#">
                  About Sneakers
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Partners
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav className={styles["nav-col"]}>
            <p className={styles["footer-heading"]}>Resources</p>
            <ul className={styles["footer-nav"]}>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Directory{" "}
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
