const IconSearch = ({ size }: { size?: number }) => {
  return (
    <svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 18.3332L16.6666 16.6665M17.5 9.58317C17.5 13.9554 13.9555 17.4998 9.58329 17.4998C5.21104 17.4998 1.66663 13.9554 1.66663 9.58317C1.66663 5.21092 5.21104 1.6665 9.58329 1.6665C13.9555 1.6665 17.5 5.21092 17.5 9.58317Z"
        stroke="#626B79"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconSearch
