import Image from 'next/image'
import { IconTrophy } from '@/components/icons'
import {
  IBlockResponse,
  ICosmosDetailResponse,
  IPoolResponse,
} from '@/services/cosmos-api'
import useGetCosmosDetail from '@/services/hooks/useGetCosmosDetail'
import useGetCosmosSupply from '@/services/hooks/useGetCosmosSupply'
import { numberAbbr } from '@/utils/number-abbr'
import { thousandSeparator } from '@/utils/thousand-separator'
import useGetCosmosLatestBlocks from '@/services/hooks/useGetCosmosLatestBlocks'
import useGetCosmosPool from '@/services/hooks/useGetCosmosPool'
import { useEffect, useRef } from 'react'
import dayjs from 'dayjs'

const BlockchainDetail = () => {
  const prevTime = useRef(`${new Date()}`)
  const { data = {} as IBlockResponse, isLoading } = useGetCosmosLatestBlocks()

  const block = data?.block || {}
  const header = block.header || {}

  const { data: poolData = {} as { pool: IPoolResponse } } = useGetCosmosPool()
  const pool = poolData.pool || {}

  const { data: detailData = {} as ICosmosDetailResponse } =
    useGetCosmosDetail()

  const {
    data: supplyData = {} as { amount: { amount: string; denom: string } },
  } = useGetCosmosSupply()
  const supplyAmount = (supplyData.amount || {}) as {
    amount: string
    denom: string
  }

  useEffect(() => {
    prevTime.current = header.time
  }, [header.time])

  const blockTime = Math.abs(
    dayjs(header.time).diff(prevTime.current, 'ms') / 1000
  )

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={detailData.image?.large}
          width={50}
          height={10}
          className="block w-[3rem] h-[3rem] my-auto"
          alt={detailData.symbol}
        />
        <div>
          <div className="flex gap-0.5">
            <h3 className="uppercase font-bold text-lg mb-0 flex">
              {`${detailData.symbol}`}
            </h3>
            <div className="ml-3">
              <IconTrophy />
            </div>

            <div className="font-semibold">{`${detailData.market_cap_rank}`}</div>
            <div className="text-xs" style={{ marginTop: '0.5rem' }}>
              Marketcap
            </div>
          </div>
          <div>
            <a href={detailData.ico_data?.links?.web}>
              <div className="text-blue-600">{detailData.name}</div>
            </a>
            <div className="text-sm">{detailData.ico_data?.short_desc}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="text-sm">
          <div className="text-gray-500">Height</div>
          <div className="font-bold">
            {thousandSeparator(Number(header.height || 0))}
          </div>
        </div>
        <div className="text-sm">
          <div className="text-gray-500">Bonded Token</div>
          <div className="font-bold">
            {`${numberAbbr(Number(pool.bonded_tokens || 0) / 1000000)}`}
          </div>
        </div>
        <div className="text-sm">
          <div className="text-gray-500">Supply</div>
          <div className="font-bold">
            {numberAbbr(Number(supplyAmount.amount || 0) / 1000000)}
          </div>
        </div>
        <div className="text-sm">
          <div className="text-gray-500">Block Time</div>
          <div className="font-bold">{`${blockTime} s`}</div>
        </div>
        <div className="text-sm">
          <div className="text-gray-500">Chain ID</div>
          <div className="font-bold">{header.chain_id}</div>
        </div>
      </div>
    </div>
  )
}

export default BlockchainDetail
