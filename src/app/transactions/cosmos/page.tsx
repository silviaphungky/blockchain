'use client'

import { PageTitle } from '@/components'
import TransactionTable from './components/TransactionTable'

export default function CosmosTransactions() {
  return (
    <div className="mb-5">
      <PageTitle
        title="Latest Transaction"
        description={'The data is updated periodically.'}
      />
      <TransactionTable />
    </div>
  )
}
