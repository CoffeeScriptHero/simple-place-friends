export const magnifier = ({
  color = "rgba(var(--bb2, 239, 239, 239), 1)",
  stroke = "rgba(var(--f52,142,142,142),1)",
  width = "25.5",
  height = "24",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="-1 0 26 24"
  >
    <title>magnifier</title>
    <path
      d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
      fill={color}
      stroke={stroke}
      strokeWidth="1.7px"
    />
  </svg>
);
