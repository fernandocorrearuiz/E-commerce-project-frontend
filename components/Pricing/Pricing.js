import styles from "../../styles/Pricing.module.css";

const Pricing = () => {
  return (
    <div>
      <section id="pricing" className={styles["section-pricing"]}>
        <div className={styles.container}>
          <span className={styles.subheading}>Pricing</span>
          <h2 className={styles["heading-secondary"]}>
            Choose between one of our 2 models:
          </h2>
        </div>

        <div
          className={`${styles.container} ${styles.grid} ${styles["grid--2-cols"]} ${styles["margin-bottom-md"]}`}
        >
          <div
            className={`${styles["princing-plan"]} ${styles["princing-plan--starter"]} `}
          >
            <header className={styles["plan-header"]}>
              <p className={styles["plan-name"]}>Rollers</p>
              <p className={styles["plan-price"]}>
                <span>$</span>199
              </p>
            </header>
            <img
              src="/images/image-product-4.jpg"
              width="100%"
              alt="Customer photo"
            />

            <div className={styles["plan-sing-up"]}>
              <a
                href="#"
                className={`${styles["btn"]} ${styles["btn--full"]} `}
              >
                Buy Now
              </a>
            </div>
          </div>

          <div
            className={`${styles["princing-plan"]} ${styles["princing-plan--complete"]} `}
          >
            <header className={styles["plan-header"]}>
              <p className={styles["plan-name"]}>Sliders</p>
              <p className={styles["plan-price"]}>
                <span>$</span>399
              </p>
            </header>
            <img
              src="/images/image-product-3.jpg"
              width="100%"
              alt="Customer photo"
            />

            <div className={styles["plan-sing-up"]}>
              <a
                href="#"
                className={`${styles["btn"]} ${styles["btn--full"]} `}
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.container} ${styles.grid} `}>
          <aside className={styles["plan-details"]}>
            Prices include all applicable taxes. You can ask for reimbursement
            in the fisrt 14 days after delivery.
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
