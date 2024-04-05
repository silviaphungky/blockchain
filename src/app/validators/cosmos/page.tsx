'use client'
import { useEffect, useState } from 'react'

import { InputDropdown, PageTitle, Shimmer } from '@/components'
import { IValidatorResponse } from '@/services/cosmos-api'
import useGetCosmosValidators from '@/services/hooks/useGetCosmosValidators'
import { thousandSeparator } from '@/utils/thousand-separator'
import PieChart from '@/components/PieChart'
import { ResponsiveContainer } from 'recharts'

enum StatusType {
  bonded = 'BOND_STATUS_BONDED',
  unbonding = 'BOND_STATUS_UNBONDING',
  unbonded = 'BOND_STATUS_UNBONDED',
  unspecified = 'BOND_STATUS_UNSPECIFIED',
}

const STATUS_OPTIONS = [
  {
    id: '',
    label: 'All',
  },
  {
    id: StatusType.bonded,
    label: 'Bonded',
  },
  {
    id: StatusType.unbonding,
    label: 'Unbonding',
  },
  {
    id: StatusType.unbonded,
    label: 'Unbonded',
  },
]

const STATUS_COLOR_MAP = {
  UNBONDED: 'text-blue-400',
  BONDED: 'text-green-600',
  UNBONDING: 'text-red-400',
}

export default function CosmosValidators() {
  const [mapValue, setMapValue] = useState({
    bonded: 0,
    unbonding: 0,
    unbonded: 0,
  })
  const [selectedStatus, setSelectedStatus] = useState<{
    label: string
    id: StatusType
  }>(
    {} as {
      label: string
      id: StatusType
    }
  )
  const { data = {} as { validators: Array<IValidatorResponse> }, isLoading } =
    useGetCosmosValidators({
      status: selectedStatus.id ? selectedStatus.id : undefined,
    })
  const validators = data.validators || []

  const validatorsSorted = validators.sort(
    (a, b) => Number(b.delegator_shares) - Number(a.delegator_shares)
  )

  useEffect(() => {
    if (validators && !selectedStatus.id) {
      setMapValue({
        bonded: validators.filter((item) => item.status === StatusType.bonded)
          .length,
        unbonded: validators.filter(
          (item) => item.status === StatusType.unbonded
        ).length,
        unbonding: validators.filter(
          (item) => item.status === StatusType.unbonding
        ).length,
      })
    }
  }, [selectedStatus.id, validators])

  return (
    <>
      <PageTitle
        title="Validators"
        description={
          'Participants of a Proof-of-Stake (PoS) blockchain network.'
        }
      />
      <div className="w-[10rem] mb-4">
        <InputDropdown
          value={selectedStatus as { id: string; label: string }}
          placeholder="All status"
          options={STATUS_OPTIONS}
          onChange={setSelectedStatus as any}
        />
      </div>
      {isLoading && <Shimmer />}
      {!isLoading && (
        <div>
          <div>
            <div className="flex text-sm gap-0.5 mb-2">
              <div>Showing</div>
              <div className="font-semibold">{validatorsSorted.length}</div>
              <div>from</div>
              <div className="font-semibold">{validatorsSorted.length}</div>
              <div>validators</div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="h-[calc(100vh-17rem)] overflow-auto  border border-gray-300 rounded-lg p-4">
                <table className="table--border">
                  <thead className="text-sm">
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Delegator Shares</th>
                      <th>
                        <div>Commission/</div>
                        <div>Max. Rates</div>
                      </th>
                    </tr>
                  </thead>
                  {validatorsSorted.map((item, index) => {
                    const status = item.status.split('BOND_STATUS_').pop()

                    return (
                      <tr key={item.consensus_pubkey.key} className="text-sm">
                        <td className="text-center">{index + 1}</td>
                        <td className="font-semibold">
                          {item.description.moniker}
                        </td>
                        <td
                          className={`text-center font-semibold ${
                            STATUS_COLOR_MAP[
                              status as 'BONDED' | 'UNBONDED' | 'UNBONDING'
                            ]
                          }`}
                        >
                          {status}
                        </td>
                        <td className="text-center relative">
                          <div>
                            {thousandSeparator(
                              Math.round(
                                Number(item.delegator_shares) / 1000000
                              )
                            )}
                          </div>
                        </td>
                        <td className="text-center">
                          <div>
                            {`${Math.round(
                              Number(item.commission.commission_rates.rate) *
                                100
                            )}%`}
                          </div>
                          <div>
                            {`${Math.round(
                              Number(
                                item.commission.commission_rates.max_rate
                              ) * 100
                            )}%`}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </table>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 w-[30rem]">
                <div className="text-lg font-semibold">Status Summary</div>
                <ResponsiveContainer width={'100%'} height={300}>
                  <PieChart
                    showLabel
                    pieData={[
                      {
                        name: 'bonded',
                        value: mapValue.bonded,
                        color: '#16a34a',
                      },
                      {
                        name: 'unbonded',
                        value: mapValue.unbonded,
                        color: '#60a5fa',
                      },
                      {
                        name: 'unbonding',
                        value: mapValue.unbonding,
                        color: '#fab560',
                      },
                    ]}
                  />
                </ResponsiveContainer>
                <div>
                  <div className="flex gap-1 items-center">
                    <div className="h-[1rem] w-[1rem] bg-green-600 mb-1" />
                    <div className="text-sm">BONDED</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-[1rem] w-[1rem] bg-blue-500 mb-1" />
                    <div className="text-sm">UNBONDED</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="h-[1rem] w-[1rem] bg-orange-300" />
                    <div className="text-sm">UNBONDING</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
