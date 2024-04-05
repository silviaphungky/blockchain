'use client'

import { PageTitle, Shimmer } from '@/components'
import { IProposalResponse } from '@/services/cosmos-api'
import useGetCosmosProposals from '@/services/hooks/useGetCosmosProposals'
import { useState } from 'react'
import VotingStatusBar from './components/VotingStatusBar'
import ProposalTable from './components/ProposalTable'

export enum ProposalVoting {
  PASSED = 'PROPOSAL_STATUS_PASSED',
  REJECTED = 'PROPOSAL_STATUS_REJECTED',
  VOTING_PERIOD = 'PROPOSAL_STATUS_VOTING_PERIOD',
}

const CosmosProposals = () => {
  const [selectedVote, setSelectedVote] = useState<undefined | ProposalVoting>(
    undefined
  )
  const { data = {} as { proposals: Array<IProposalResponse> }, isLoading } =
    useGetCosmosProposals()
  const proposals = data.proposals

  const mappedProposals = selectedVote
    ? proposals.filter((el) => el.status === selectedVote)
    : proposals

  return (
    <>
      <PageTitle title="Proposals" />
      {isLoading && <Shimmer />}
      {!isLoading && (
        <>
          <div className="flex text-sm gap-0.5 mb-2">
            <div>Showing</div>
            <div className="font-semibold">{mappedProposals.length}</div>
            <div>from</div>
            <div className="font-semibold">{mappedProposals.length}</div>
            <div>proposals</div>
          </div>
          <VotingStatusBar
            proposals={proposals}
            selectedVote={selectedVote}
            setSelectedVote={setSelectedVote}
          />
          <ProposalTable proposals={mappedProposals} />
        </>
      )}
    </>
  )
}

export default CosmosProposals
