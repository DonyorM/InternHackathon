import styles from "./PlusButton.module.css";

const PlusButton = () => {
  return (
    <div className={styles.plusButton}>
      <button className={styles.button}>
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="15.4444" r="15.2593" fill="#2E6CA2" />
          <path
            d="M16.0509 9.08642V22.4383"
            stroke="white"
            stroke-width="2.1363"
            stroke-linecap="round"
          />
          <path
            d="M9.64198 15.4953L22.9938 15.4953"
            stroke="white"
            stroke-width="2.1363"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default PlusButton;
