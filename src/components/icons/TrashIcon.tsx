interface TrashButtonProps {
  setQuantity: (quantity: number) => void;
  quantity: number;
}
const TrashIcon: React.FC<TrashButtonProps> = ({ setQuantity, quantity }) => {
  return (
    <button
      onClick={() => {
        setQuantity(quantity - 1);
      }}
      style={{ background: "inherit", border: "none" }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14.2305" cy="14.2305" r="13.5638" fill="#E8E8E8" />
        <path
          d="M9 15L19.347 15"
          stroke="#2E6CA2"
          stroke-width="1.65553"
          stroke-linecap="round"
        />
      </svg>
    </button>
  );
};

export default TrashIcon;
