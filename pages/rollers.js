import { useState, useEffect, useContext } from "react";
import axios from "axios";

import NavBar from "../components/_App/NavBar";
import Footer from "../components/_App/Footer";
import Cart from "../components/Cart/Cart";
import CartContext from "../store/cart-context";
import CartProvider from "../store/CartProvider";

import styles from "../styles/RollersDetails.module.css";

const RollersInfo = () => {
  const cartCtx = useContext(CartContext);

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

  const addToCartHandler = () => {
    console.log(products[0]);
    // esto funciona
    cartCtx.items = products[0];
    // la funcion no
    // cartCtx.addItem(products[0]);
    cartCtx.addItem({ id: 23, name: "Hello" });
    console.log(cartCtx);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <NavBar onShowCart={showCartHandler} />
      <div className={styles["section-rollers"]}>
        <div className={styles.rollers}>
          <div className={styles["heading-primary"]}>Rollers</div>

          <div className="diets">
            <ul className="list">
              <li className="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span className={styles["heading-secondary"]}>Adjustable</span>
              </li>
              <li class="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span className={styles["heading-secondary"]}>Stable</span>
              </li>
              <li class="list-item">
                <ion-icon
                  className="list-icon"
                  name="checkmark-outline"
                ></ion-icon>
                <span className={styles["heading-secondary"]}>
                  Roomy enough
                </span>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className={`${styles.btn} ${styles["btn--outline"]}`}>
              Buy Now!
            </a>
            <button
              onClick={addToCartHandler}
              className={`${styles.btn} ${styles["btn--outline"]}`}
            >
              Add To Cart
            </button>
          </div>
          <div className={styles["heading-primary"]}>
            € {products[0]?.price}
          </div>
        </div>
      </div>
      <Footer />
    </CartProvider>
  );
};

export default RollersInfo;
