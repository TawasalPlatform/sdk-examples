export const X = ({ className }: { className: string }) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        d="M20.4147 9.58542C20.0246 9.19536 19.3922 9.19541 19.002 9.58553L15.0002 13.5874L11.0614 9.64858C10.6713 9.25852 10.0389 9.25858 9.64876 9.6487C9.25864 10.0388 9.25859 10.6713 9.64864 11.0613L13.5874 15.0001L9.58559 19.002C9.19547 19.3921 9.19542 20.0246 9.58548 20.4146C9.97553 20.8047 10.608 20.8046 10.9981 20.4145L15 16.4126L18.9387 20.3514C19.3288 20.7415 19.9613 20.7414 20.3514 20.3513C20.7415 19.9612 20.7416 19.3287 20.3515 18.9387L16.4127 14.9999L20.4146 10.9981C20.8047 10.6079 20.8047 9.97547 20.4147 9.58542Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const BigX = ({ className }: { className: string }) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 18L18.75 6M6.75 6L18.75 18"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

<svg
  width="25"
  height="24"
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.75 18L18.75 6M6.75 6L18.75 18"
    stroke="white"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
