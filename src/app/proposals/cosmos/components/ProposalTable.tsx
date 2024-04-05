import dayjs from 'dayjs'

import { IProposalResponse } from '@/services/cosmos-api'

const STATUS_COLOR_MAP = {
  'VOTING PERIOD': 'text-blue-400',
  PASSED: 'text-green-600',
  REJECTED: 'text-red-400',
}

const ProposalTable = ({
  proposals,
}: {
  proposals: Array<IProposalResponse>
}) => {
  return (
    <div className="h-[calc(100vh-17rem)] overflow-auto mt-3">
      <table className="table--border">
        <thead>
          <tr>
            <th>
              <div className="text-sm">ID</div>
            </th>
            <th>
              <div className="text-sm">Title</div>
            </th>
            <th>
              <div className="text-sm">Type</div>
            </th>
            <th>
              <div className="text-sm">Status</div>
            </th>
            <th>
              <div className="text-sm">Voting Start Time</div>
            </th>
            <th>
              <div className="text-sm">Voting End Time</div>
            </th>
          </tr>
        </thead>
        {proposals.map((item) => {
          const type = item.content['@type']
            .split('.')
            .pop()
            ?.replace('Proposal', '')
            .match(/[A-Z][a-z]+/g)
            ?.join(' ')
          const status = item.status
            .split('PROPOSAL_STATUS_')
            .pop()
            ?.split('_')
            .join(' ')
          const isVotingClose = dayjs(new Date(item.voting_end_time)).isBefore(
            new Date()
          )
          return (
            <tr key={item.proposal_id}>
              <td>
                <div className="text-sm">{item.proposal_id}</div>
              </td>
              <td>
                <div
                  className="text-sm"
                  style={{
                    maxWidth: '300px',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.content.title}
                </div>
              </td>
              <td>
                <div className="text-sm text-center">{type}</div>
              </td>
              <td>
                <div
                  className={`text-sm ${
                    STATUS_COLOR_MAP[
                      status as 'VOTING PERIOD' | 'PASSED' | 'REJECTED'
                    ]
                  } font-semibold text-center`}
                >
                  {status}
                </div>
              </td>
              <td>
                <div
                  className={`text-sm ${
                    isVotingClose ? 'opacity-50' : 'opacity-100'
                  } text-center`}
                >
                  {dayjs(item.voting_start_time).format('DD MMM YYYY')}
                </div>
              </td>
              <td>
                <div
                  className={`text-sm ${
                    isVotingClose ? 'opacity-50' : 'opacity-100'
                  } text-center`}
                >
                  {dayjs(item.voting_end_time).format('DD MMM YYYY')}
                </div>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default ProposalTable
