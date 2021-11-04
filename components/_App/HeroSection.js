import styles from "../../styles/Hero.module.css";

const HeroSection = () => {
  return (
    <div>
      <section className={styles["section-hero"]}>
        <div className={styles.hero}>
          <div className={styles["hero-text-box"]}>
            <h1 className={styles["heading-primary"]}>
              The best sneakers for everyone, no matter your personality
            </h1>
            <p className={styles["hero-description"]}>
              Check out our brand new cool sneakers, they have been designed to
              make you feel inside heaven's shoes. You will regret not having
              your SnEaKeRs before
            </p>
            <a
              href="#"
              className={`${styles.btn} ${styles["btn--full"]} ${styles["margin-right-sm"]}`}
            >
              Check the portfolio
            </a>
            <a href="#" className={`${styles.btn} ${styles["btn--outline"]}`}>
              Learn more &darr;
            </a>
            <div className={styles["delivered-meals"]}>
              <div className={styles["delivered-imgs"]}>
                <img
                  src="/images/customers/customer-pic-1.jpg"
                  alt="Customer photo"
                />
                <img
                  src="/images/customers/customer-pic-2.jpg"
                  alt="Customer photo"
                />
                <img
                  src="/images/customers/customer-pic-3.jpg"
                  alt="Customer photo"
                />
                <img
                  src="/images/customers/customer-pic-4.jpg"
                  alt="Customer photo"
                />
                <img
                  src="/images/customers/customer-pic-5.jpg"
                  alt="Customer photo"
                />
                <img
                  src="/images/customers/customer-pic-6.jpg"
                  alt="Customer photo"
                />
              </div>
              <p className={styles["delivered-text"]}>
                <span>5,000+</span> pair of SnEaKeRs sold last month!
              </p>
            </div>
          </div>
          <div className={styles["hero-img-box"]}>
            <img
              src="/images/image-product-1.jpg"
              className={styles["hero-img"]}
              alt="A pair of sneakers, one laying down, the other standing up behind it"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
