'use client'

import { useEffect, useState } from 'react'
import { sha256 } from '@cosmjs/crypto'

import { fromBase64, toHex } from '@cosmjs/encoding'
import { DecodedTxRaw, decodeTxRaw } from '@cosmjs/proto-signing'

import { Shimmer } from '@/components'
import { IconClipboard } from '@/components/icons'

import { IBlockResponse } from '@/services/cosmos-api'
import useGetCosmosLatestBlocks from '@/services/hooks/useGetCosmosLatestBlocks'
import { thousandSeparator } from '@/utils/thousand-separator'

const TransactionTable = () => {
  const { data = {} as IBlockResponse, isLoading } = useGetCosmosLatestBlocks()
  const [transactions, setTransactions] = useState<
    Array<{
      hash: string
      decoded: DecodedTxRaw
      height: string
    }>
  >([])
  const block = data?.block || {}
  const header = block.header || {}
  const blockData = block.data || {}
  const txs = blockData.txs || []

  useEffect(() => {
    let mappedTxs = [] as Array<{
      hash: string
      decoded: DecodedTxRaw
      height: string
    }>
    txs?.forEach((tx) => {
      if (tx) {
        try {
          const raw = fromBase64(tx)
          const decoded = decodeTxRaw(raw)
          const hash = toHex(sha256(raw)).toUpperCase()
          // console.log(decoded, 'asd')
          mappedTxs = [
            ...mappedTxs,
            {
              hash,
              decoded,
              height: header.height,
            },
          ]
        } catch (e) {}
      }
    })
    setTransactions([...mappedTxs, ...transactions])
  }, [txs])

  if (isLoading) {
    return <Shimmer />
  }

  return (
    <>
      <div className="flex text-sm gap-0.5 mb-2">
        <div>Showing</div>
        <div className="font-semibold">{transactions.length}</div>
        <div>from</div>
        <div className="font-semibold">{transactions.length}</div>
        <div>transactions</div>
      </div>
      <div className="h-[calc(100vh-12rem)] overflow-auto">
        <div>
          <table className="table--border">
            <thead>
              <tr>
                <th className="text-sm">Height</th>
                <th className="text-sm">Hash</th>
                <th className="text-sm">Message</th>
                <th className="text-sm">Memo</th>
                <th className="text-sm">Fees (Atom)</th>
              </tr>
            </thead>

            {transactions.map((item) => {
              const messages = item.decoded.body.messages
              const mappedMessage = messages
                .map((item) =>
                  item.typeUrl
                    .split('.Msg')
                    .pop()
                    ?.match(/[A-Z][a-z]+/g)
                    ?.join(' ')
                )
                .join(', ')

              return (
                <tr key={item.hash}>
                  <td className="text-sm text-center">
                    {thousandSeparator(Number(item.height))}
                  </td>
                  <td>
                    <div className="flex gap-2 items-center text-sm">
                      <div className="text-blue-600">
                        {`${item.hash.substring(0, 10)}...${item.hash.substring(
                          item.hash.length - 10,
                          item.hash.length
                        )}`}
                      </div>
                      <div className="cursor-pointer">
                        <IconClipboard />
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-center">
                    <div
                      className="block m-auto"
                      style={{
                        maxWidth: '200px',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {mappedMessage || '-'}
                    </div>
                  </td>
                  <td>
                    <div
                      className="block m-auto"
                      style={{
                        maxWidth: '200px',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.decoded.body.memo || '-'}
                    </div>
                  </td>
                  <td className="text-sm text-center">
                    {`${
                      Number(
                        item.decoded.authInfo.fee?.amount[0]?.amount || 0
                      ) / 1000000
                    }`}
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default TransactionTable
