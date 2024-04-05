/* eslint-disable max-len */

interface Props {
  size?: number
  color?: string
}

const IconClipboard = ({ size, color }: Props) => {
  return (
    <svg
      width={size || 18}
      height={size || 18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 3.75H6C5.60218 3.75 5.22064 3.90804 4.93934 4.18934C4.65804 4.47064 4.5 4.85218 4.5 5.25V14.25C4.5 14.6478 4.65804 15.0294 4.93934 15.3107C5.22064 15.592 5.60218 15.75 6 15.75H13.5C13.8978 15.75 14.2794 15.592 14.5607 15.3107C14.842 15.0294 15 14.6478 15 14.25V5.25C15 4.85218 14.842 4.47064 14.5607 4.18934C14.2794 3.90804 13.8978 3.75 13.5 3.75H12M7.5 3.75C7.5 4.57843 8.17157 5.25 9 5.25H10.5C11.3284 5.25 12 4.57843 12 3.75M7.5 3.75C7.5 2.92157 8.17157 2.25 9 2.25H10.5C11.3284 2.25 12 2.92157 12 3.75M7.5 9H12M7.5 12H12"
        stroke={color || '#C8D1D6'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconClipboard
