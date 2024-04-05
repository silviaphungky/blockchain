import { forwardRef } from 'react'
import { IconSearch } from '../icons'

const InputSearch = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="flex gap-3 block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-5">
      <IconSearch />
      <input
        autoComplete="false"
        className="focus:outline-none focus:border-0 focus:ring-1 focus:ring-white"
        placeholder={props.placeholder || 'Search...'}
        {...props}
        ref={ref}
      />
    </div>
  )
})

InputSearch.displayName = 'InputSearch'

export default InputSearch
