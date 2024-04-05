'use client'

import { Shimmer, TradingView } from '@/components'
import { ICosmosDetailResponse } from '@/services/cosmos-api'
import useGetCosmosDetail from '@/services/hooks/useGetCosmosDetail'

import BlockchainDetail from './components/BlockchainDetail'

export default function CosmosDashboard() {
  const { data: detailData = {} as ICosmosDetailResponse, isLoading } =
    useGetCosmosDetail()

  if (isLoading) {
    return <Shimmer />
  }

  return (
    <div>
      <BlockchainDetail />
      <div className="mt-4">
        <TradingView symbol={detailData.symbol} />
      </div>
    </div>
  )
}
