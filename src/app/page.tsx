'use client'

import { Shimmer } from '@/components'
import { COSMOS_BASE, PATHS } from '@/constants/path'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push(`/${PATHS.dashboard}/${COSMOS_BASE}`)
  }, [])

  return (
    <div>
      <Shimmer />
    </div>
  )
}
