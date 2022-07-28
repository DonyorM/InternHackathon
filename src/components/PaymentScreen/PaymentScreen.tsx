import Or from "./OR/Or";
import styles from "./PaymentScreen.module.css";
import PaymentQRCode from "./QRCode/QRCode";

interface PaymentScreenProps {
  setCheckout: (checkout: boolean) => void;
  setPayment: (payment: boolean) => void;
}
const PaymentScreen: React.FC<PaymentScreenProps> = ({
  setCheckout,
  setPayment,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <button
          className={styles.backButton}
          onClick={() => {
            setCheckout(true);
            setPayment(false);
          }}
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

      <div className={styles.col}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.text}>
              <p style={{ color: "#3f3f3f" }}>
                Pay on your <br />
                mobile phone
              </p>
            </div>

            <PaymentQRCode />
          </div>
          <div className={styles.col}>
            <Or />
          </div>
          <div className={styles.col}>
            <button className={styles.checkout} onClick={() => {}}>
              PAY INSIDE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
