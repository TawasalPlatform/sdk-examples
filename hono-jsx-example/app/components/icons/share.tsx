export const Share = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66683 8C2.66683 10.9455 5.05464 13.3333 8.00016 13.3333C10.9457 13.3333 13.3335 10.9455 13.3335 8"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M8 9.33366L8 2.66699M8 2.66699L10 4.66699M8 2.66699L6 4.66699"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
