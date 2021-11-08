import styles from "../../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <header className={styles.header}>
        <a href="/">
          <img className={styles.logo} alt="Sneakers logo" src="/logo.svg" />
        </a>
        <nav className={styles["main-nav"]}>
          <ul className={styles["main-nav-list"]}>
            <li>
              <a className={styles["main-nav-link"]} href="/rollers">
                Rollers
              </a>
            </li>
            <li>
              <a className={styles["main-nav-link"]} href="/sliders">
                Sliders
              </a>
            </li>
            <li>
              <a className={styles["main-nav-link"]} href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className={styles["main-nav-link"]} href="#footer">
                Contact
              </a>
            </li>
            <li>
              <a
                className={`${styles["main-nav-link"]} ${styles["nav-cta"]}`}
                href="#"
              >
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
