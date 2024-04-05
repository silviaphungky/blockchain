/* eslint-disable max-len */

interface Props {
  size?: number
  color?: string
}

const IconDashboard = ({ size, color }: Props) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="10"
        height="7"
        rx="1.25"
        fill="currentColor"
      ></rect>
      <rect
        x="2"
        y="10"
        width="10"
        height="12"
        rx="1.25"
        fill="currentColor"
      ></rect>
      <rect
        x="13"
        y="2"
        width="9"
        height="12"
        rx="1.25"
        fill="currentColor"
      ></rect>
      <rect
        x="13"
        y="15"
        width="9"
        height="7"
        rx="1.25"
        fill="currentColor"
      ></rect>
    </svg>
  )
}

export default IconDashboard
