/* eslint-disable max-len */

interface Props {
  size?: number
  color?: string
}

const IconInfo = ({ size, color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 18}
      height={size || 18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9 0.856445C4.58217 0.856445 1 4.43862 1 8.85645C1 13.2743 4.58217 16.8564 9 16.8564C13.4178 16.8564 17 13.2743 17 8.85645C17 4.43862 13.4178 0.856445 9 0.856445Z"
        stroke={color || '#C8D1D6'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M7.73438 7.59082H8.85938V11.6689"
        stroke={color || '#C8D1D6'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.3125 11.8096H10.4062"
        stroke={color || '#C8D1D6'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M8.71875 4.42676C8.53797 4.42676 8.36124 4.48037 8.21092 4.58081C8.06061 4.68124 7.94345 4.824 7.87427 4.99102C7.80508 5.15805 7.78698 5.34183 7.82225 5.51914C7.85752 5.69646 7.94458 5.85933 8.07241 5.98716C8.20024 6.11499 8.36312 6.20205 8.54043 6.23732C8.71774 6.27259 8.90152 6.25449 9.06855 6.1853C9.23557 6.11612 9.37833 5.99896 9.47877 5.84865C9.5792 5.69833 9.63281 5.5216 9.63281 5.34082C9.63281 5.0984 9.53651 4.8659 9.36509 4.69448C9.19367 4.52306 8.96117 4.42676 8.71875 4.42676Z"
        fill={color || '#C8D1D6'}
      />
    </svg>
  )
}

export default IconInfo
