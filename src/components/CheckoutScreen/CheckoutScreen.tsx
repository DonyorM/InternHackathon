import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./CheckoutScreen.module.css";

const CheckoutScreen: React.FC = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Your Cart</h1>
        <div>
          {cart.map((entry) => (
            <div className={styles.itemGroup}>
              <img src={`/images/${entry.item.id}.jpg`} width={60} />
              <div className={styles.itemBar}>
                <span className={styles.itemName}>{entry.item.name}</span>
                <span className={styles.price}>
                  ${entry.item.price.toFixed(2)} x {entry.quanity}
                </span>
                <span className={styles.remove}>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.978818 1.02169C0.928599 1.07178 0.888756 1.13129 0.86157 1.1968C0.834385 1.26231 0.820392 1.33255 0.820392 1.40348C0.820392 1.47441 0.834385 1.54464 0.86157 1.61016C0.888756 1.67567 0.928599 1.73518 0.978818 1.78527L3.29222 4.09976L0.976661 6.41424C0.875403 6.51535 0.818461 6.65255 0.81836 6.79565C0.818309 6.8665 0.832216 6.93668 0.859285 7.00216C0.886354 7.06764 0.926055 7.12715 0.976122 7.17728C1.02619 7.22742 1.08564 7.26721 1.15108 7.29437C1.21653 7.32153 1.28668 7.33554 1.35753 7.33559C1.50063 7.33569 1.63791 7.27894 1.73917 7.17782L4.05473 4.86226L6.36921 7.17782C6.47047 7.27894 6.60775 7.33569 6.75085 7.33559C6.89395 7.33549 7.03114 7.27854 7.13226 7.17728C7.23337 7.07603 7.29012 6.93875 7.29002 6.79565C7.28992 6.65255 7.23298 6.51535 7.13172 6.41424L4.81832 4.09976L7.1328 1.78527C7.23406 1.68416 7.291 1.54696 7.2911 1.40386C7.2912 1.26076 7.23445 1.12348 7.13334 1.02223C7.03222 0.920968 6.89502 0.864026 6.75193 0.863925C6.60883 0.863823 6.47155 0.920572 6.37029 1.02169L4.05581 3.33725L1.74025 1.02169C1.63912 0.920592 1.50198 0.8638 1.35899 0.8638C1.216 0.8638 1.07886 0.920592 0.97774 1.02169H0.978818Z"
                      fill="#FE5050"
                    />
                  </svg>
                  Remove
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>bottom</div>
      </div>
    </>
  );
};

export default CheckoutScreen;
