'use client'

import Link from 'next/link'
import { COSMOS_BASE } from '@/constants/path'
import { SIDEBAR_MENU } from './constants'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  const section = pathname.split('/')
  return (
    <div className="fixed left-0 border-r border-gray-200 h-screen top-[65px] w-[160px] px-1">
      <div className="my-4">
        {SIDEBAR_MENU.map((item, index) => {
          const isActive = section[1] === item.label.toLowerCase()
          return (
            <div
              key={item.label}
              className={`mt-2 p-3 ${
                isActive ? ' bg-blue-50 font-semibold' : ''
              } rounded-md`}
            >
              <Link
                key={`index-${item.label}`}
                color="inherit"
                href={`${item.path}/${COSMOS_BASE}`}
                style={{ textTransform: 'capitalize' }}
                className="flex gap-1 items-center"
              >
                {item.icon}
                <div>{item.label}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
