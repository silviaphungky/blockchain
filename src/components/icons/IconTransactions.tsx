/* eslint-disable max-len */

interface Props {
  size?: number
  color?: string
}

const IconTransactions = ({ size, color }: Props) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.36862 2.59524C7.36862 2.2665 7.63512 2 7.96386 2H19.2194C19.5481 2 19.8146 2.2665 19.8146 2.59524V17.9995C19.8146 18.3283 19.5481 18.5948 19.2194 18.5948H18.1415C17.7963 18.5948 17.5165 18.315 17.5165 17.9698V5.10326C17.5165 4.77452 17.25 4.50802 16.9212 4.50802H7.99362C7.64844 4.50802 7.36862 4.2282 7.36862 3.88303V2.59524ZM5.43505 5.40527C4.7447 5.40527 4.18506 5.96491 4.18506 6.65527V20.7501C4.18506 21.4404 4.7447 22.0001 5.43505 22.0001H15.381C16.0714 22.0001 16.631 21.4404 16.631 20.7501V6.65527C16.631 5.96492 16.0714 5.40527 15.381 5.40527H5.43505ZM7.44472 11.5298C7.1174 11.5298 6.85205 11.7951 6.85205 12.1225C6.85205 12.4498 7.1174 12.7151 7.44472 12.7151H13.3714C13.6987 12.7151 13.964 12.4498 13.964 12.1225C13.964 11.7951 13.6987 11.5298 13.3714 11.5298H7.44472ZM6.85205 15.2826C6.85205 14.9553 7.1174 14.6899 7.44472 14.6899H13.3743C13.7016 14.6899 13.967 14.9553 13.967 15.2826C13.967 15.6099 13.7016 15.8753 13.3743 15.8753H7.44472C7.1174 15.8753 6.85205 15.6099 6.85205 15.2826Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default IconTransactions
