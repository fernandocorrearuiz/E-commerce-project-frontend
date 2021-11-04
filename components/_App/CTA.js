import styles from "../../styles/CTA.module.css";

const CTA = () => {
  return (
    <div>
      <section className={styles["section-cta"]}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div className={styles["cta-text-box"]}>
              <h2 className={styles["heading-secondary"]}>
                Subscribe to our Newsletter!
              </h2>
              <p className={styles["cta-text"]}>
                Subscribe to out Newsletter if you wanna receive the latest
                information about SnEaKeRs! The shoes of the future!
              </p>

              <form className={styles["cta-form"]} action="#">
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Ex: Alice Wright"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select id="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="instagram ad">Instagram ad</option>
                    <option value="youtube">Youtube</option>
                    <option value="facebook ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className={`${styles.btn} ${styles["btn--form"]}`}>
                  Sign up now
                </button>

                {/* <input type="checkbox" />
                <input type="number" /> */}
              </form>
            </div>
            <div
              className={styles["cta-img-box"]}
              role="img"
              aria-label="A pair of sneakers over two piled small rocks"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
