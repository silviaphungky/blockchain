/* eslint-disable max-len */

interface Props {
  size?: number
}

const IconInfoBg = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 18}
      height={size || 18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <g clipPath="url(#clip0_2891_4858)">
        <path
          d="M1.5 9C1.5 13.1423 4.85775 16.5 9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9Z"
          fill="#9497B0"
        />
        <path
          d="M1.5 9C1.5 13.1423 4.85775 16.5 9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9Z"
          fill="#C8D1D6"
        />
        <path
          d="M8.25 5.25H9.75V6.75H8.25V5.25ZM8.25 8.25H9.75V12.75H8.25V8.25Z"
          fill="#FDFDFD"
        />
      </g>
      <defs>
        <clipPath id="clip0_2891_4858">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconInfoBg
