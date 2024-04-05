'use client'

import { usePathname } from 'next/navigation'
import { InputSearch } from '..'
import { IconChevronDown, IconCosmos } from '../icons'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  const pathList = pathname.split('/')
  const blockchain = pathList.pop()
  return (
    <nav className="bg-white w-full border-b border-gray-200 pr-6 pl-6 pt-3 pb-3 fixed z-10 top-0 flex gap-4 justify-end">
      <Image src="/blockchain.png" alt="brand" width={40} height={10} />
      <div className="ml-auto flex items-center gap-1 cursor-pointer">
        <IconCosmos size={24} />
        <span className="uppercase text-sm font-semibold">{blockchain}</span>
        <IconChevronDown />
      </div>

      <div className="w-60 block">
        <InputSearch />
      </div>
    </nav>
  )
}

export default Navbar
