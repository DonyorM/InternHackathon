import { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "./CheckoutScreen.module.css";
import SuggestedItems from "../SuggestedItems/SuggestedItems";

interface CheckoutScreenProps {
  setCheckout: (checkout: boolean) => void;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ setCheckout }) => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className={styles.topBar}>
        <button
          className={styles.backButton}
          onClick={() => setCheckout(false)}
        >
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9999 5.00001C13.9999 4.8674 13.9472 4.74022 13.8535 4.64645C13.7597 4.55268 13.6325 4.50001 13.4999 4.50001H1.70692L4.85392 1.35401C4.9004 1.30752 4.93728 1.25233 4.96244 1.19159C4.9876 1.13085 5.00055 1.06575 5.00055 1.00001C5.00055 0.934262 4.9876 0.869162 4.96244 0.808423C4.93728 0.747683 4.9004 0.692494 4.85392 0.646006C4.80743 0.599518 4.75224 0.562642 4.6915 0.537483C4.63076 0.512324 4.56566 0.499374 4.49992 0.499374C4.43417 0.499374 4.36907 0.512324 4.30833 0.537483C4.24759 0.562642 4.1924 0.599518 4.14592 0.646006L0.145917 4.64601C0.099354 4.69245 0.0624111 4.74763 0.0372047 4.80837C0.0119982 4.86912 -0.000976563 4.93424 -0.000976562 5.00001C-0.000976563 5.06577 0.0119982 5.13089 0.0372047 5.19164C0.0624111 5.25238 0.099354 5.30756 0.145917 5.35401L4.14592 9.35401C4.1924 9.40049 4.24759 9.43737 4.30833 9.46253C4.36907 9.48769 4.43417 9.50064 4.49992 9.50064C4.56566 9.50064 4.63076 9.48769 4.6915 9.46253C4.75224 9.43737 4.80743 9.40049 4.85392 9.35401C4.9004 9.30752 4.93728 9.25233 4.96244 9.19159C4.9876 9.13085 5.00055 9.06575 5.00055 9.00001C5.00055 8.93426 4.9876 8.86916 4.96244 8.80842C4.93728 8.74768 4.9004 8.69249 4.85392 8.64601L1.70692 5.50001H13.4999C13.6325 5.50001 13.7597 5.44733 13.8535 5.35356C13.9472 5.25979 13.9999 5.13261 13.9999 5.00001Z"
              fill="#595959"
            />
          </svg>{" "}
          Back
        </button>
        <img className={styles.topLogo} src="/logo.svg" alt="" />
      </div>
      <div className={styles.main}>
        <div className={styles.items}>
          <h1 className={styles.yourCart}>Your Cart</h1>
          {cart.map((entry) => (
            <div className={styles.itemGroup} key={entry.item.id}>
              <img src={`/images/${entry.item.id}.jpg`} width={60} />
              <div className={styles.itemBar}>
                <span className={styles.itemName}>{entry.item.name}</span>
                <span className={styles.price}>
                  ${entry.item.price.toFixed(2)}
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
        {/* <div className={styles.suggestedSection}> */}
         
        {/* </div> */}
        <div className={styles.orderTotal}>
          <h2 className={styles.orderTotalTitle}>Order Total</h2>
          {cart.map((cartItem) => (
            <span className={styles.price}>
              ${cartItem.item.price} x {cartItem.quanity}
            </span>
          ))}
          <div className={styles.bar}></div>
          <span className={styles.total}>
            $
            {cart.reduce(
              (partialSum, entry) =>
                partialSum + entry.item.price * entry.quanity,
              0
            )}
          </span>
          <button className={styles.checkout}>PROCEED TO PAYMENT</button>
        </div>
      </div>
      <SuggestedItems />
    </>
  );
};

export default CheckoutScreen;
