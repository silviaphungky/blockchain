import { IProposalResponse } from '@/services/cosmos-api'
import { ProposalVoting } from '../page'
import { Dispatch, useRef } from 'react'
import useOutsideClick from '@/utils/useClickOutside'

const VotingStatusBar = ({
  proposals,
  selectedVote,
  setSelectedVote,
}: {
  proposals: Array<IProposalResponse>
  selectedVote: undefined | ProposalVoting
  setSelectedVote: Dispatch<undefined | ProposalVoting>
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const totalProposal = proposals.length
  const passedProposal = proposals.filter(
    (el) => el.status === ProposalVoting.PASSED
  ).length
  const rejectedProposal = proposals.filter(
    (el) => el.status === ProposalVoting.REJECTED
  ).length
  const votingProposal = proposals.filter(
    (el) => el.status === ProposalVoting.VOTING_PERIOD
  ).length

  const handleClickBar = (status: ProposalVoting) => {
    if (selectedVote !== status) {
      setSelectedVote(status)
    } else setSelectedVote(undefined)
  }

  useOutsideClick(ref, () => setSelectedVote(undefined))

  return (
    <div className="flex w-full" ref={ref}>
      <div
        className={`bg-green-600 cursor-pointer ${
          selectedVote === ProposalVoting.PASSED || !selectedVote
            ? 'opacity-100'
            : 'opacity-30'
        }`}
        style={{
          width: `${(passedProposal / totalProposal) * 100}%`,
          height: '1rem',
          borderTopLeftRadius: '0.5rem',
          borderBottomLeftRadius: '0.5rem',
        }}
        onClick={() => handleClickBar(ProposalVoting.PASSED)}
      />
      <div
        style={{
          width: `${(rejectedProposal / totalProposal) * 100}%`,
          height: '1rem',
        }}
        className={`bg-red-400 cursor-pointer ${
          selectedVote === ProposalVoting.REJECTED || !selectedVote
            ? 'opacity-100'
            : 'opacity-30'
        }`}
        onClick={() => handleClickBar(ProposalVoting.REJECTED)}
      />
      <div
        style={{
          width: `${(votingProposal / totalProposal) * 100}%`,
          height: '1rem',
          borderTopRightRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
        }}
        className={`bg-blue-400 cursor-pointer ${
          selectedVote === ProposalVoting.VOTING_PERIOD || !selectedVote
            ? 'opacity-100'
            : 'opacity-30'
        }`}
        onClick={() => handleClickBar(ProposalVoting.VOTING_PERIOD)}
      />
    </div>
  )
}

export default VotingStatusBar
