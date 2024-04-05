import axios from 'axios'
import { API_URLS } from '@/constants/api-path'

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/cosmos`

export interface IBlockResponse {
  block: {
    header: {
      chain_id: string
      height: string
      time: string
    }
    data: {
      txs: Array<string>
    }
  }
}

export interface IValidatorResponse {
  operator_address: string
  consensus_pubkey: {
    '@type': string
    key: string
  }
  jailed: boolean
  status:
    | 'BOND_STATUS_BONDED'
    | 'BOND_STATUS_UNBONDED'
    | 'BOND_STATUS_UNBONDING'
    | 'BOND_STATUS_UNSPECIFIED'
  tokens: string
  delegator_shares: string
  description: {
    moniker: string
    identity: string
    website: 'https://www.ubik.capital'
    security_contact: string
    details: string
  }
  unbonding_height: string
  unbonding_time: string
  commission: {
    commission_rates: {
      rate: string
      max_rate: string
      max_change_rate: string
    }
    update_time: string
  }
  min_self_delegation: string
  unbonding_on_hold_ref_count: string
  unbonding_ids: Array<string>
  validator_bond_shares: string
  liquid_shares: string
}

export interface IProposalResponse {
  proposal_id: string
  content: {
    '@type': string
    title: string
    description: string
  }
  status:
    | 'PROPOSAL_STATUS_PASSED'
    | 'PROPOSAL_STATUS_REJECTED'
    | 'PROPOSAL_STATUS_VOTING_PERIOD'
  final_tally_result: {
    yes: string
    abstain: string
    no: string
    no_with_veto: string
  }
  submit_time: string
  deposit_end_time: string
  total_deposit: [
    {
      denom: string
      amount: string
    }
  ]
  voting_start_time: string
  voting_end_time: string
}

export interface IPoolResponse {
  not_bonded_tokens: string
  bonded_tokens: string
}

export interface ICosmosDetailResponse {
  id: string
  symbol: string
  name: string
  categories: string
  preview_listing: false
  public_notice: null
  additional_notices: []
  description: {
    en: string
  }
  image: {
    thumb: string
    small: string
    large: string
  }
  country_origin: ''
  genesis_date: null
  sentiment_votes_up_percentage: 80.0
  sentiment_votes_down_percentage: 20.0
  ico_data: {
    ico_start_date: string
    ico_end_date: string
    short_desc: string
    description: string
    links: {
      web: string
    }
  }
  market_cap_rank: number
  market_data: {
    total_value_locked: null
    mcap_to_tvl_ratio: null
    fdv_to_tvl_ratio: null
    roi: {
      times: 108.8082693249394
      currency: 'usd'
      percentage: 10880.82693249394
    }
    market_cap: {
      en: number
    }
  }
}

export const CosmosApi = {
  getDetail: async () => {
    const response = await axios.get<ICosmosDetailResponse>(
      `https://api.coingecko.com/api/v3/coins/cosmos`
    )
    return response.data
  },
  getSupply: async () => {
    const response = await axios.get<{
      amount: string
      denom: string
    }>(`${baseUrl}/bank/v1beta1/${API_URLS.COSMOS_SUPPLY}?denom=uatom`)
    return response.data
  },
  getLatestBlocks: async () => {
    const response = await axios.get<IBlockResponse>(
      `${baseUrl}/base/tendermint/v1beta1/${API_URLS.COSMOS_BLOCKS}`
    )
    return response.data
  },
  getPool: async () => {
    const response = await axios.get<{ pool: IPoolResponse }>(
      `${baseUrl}/staking/v1beta1/${API_URLS.COSMOS_POOL}`
    )
    return response.data
  },
  getAvgTime: async () => {
    const response = await axios.get<{ pool: IPoolResponse }>(
      `${baseUrl}/staking/v1beta1/blocks/avg-time`
    )
    return response.data
  },
  getValidators: async ({
    status,
  }: {
    status?:
      | 'BOND_STATUS_BONDED'
      | 'BOND_STATUS_UNBONDED'
      | 'BOND_STATUS_UNBONDING'
      | 'BOND_STATUS_UNSPECIFIED'
  }) => {
    const response = await axios.get<{ validators: Array<IValidatorResponse> }>(
      `${baseUrl}/staking/v1beta1/${API_URLS.COSMOS_VALIDATORS}`,
      {
        params: {
          status,
          'pagination.limit': 1000,
        },
      }
    )
    return response.data
  },
  getProposals: async () => {
    const response = await axios.get<{ proposals: Array<IProposalResponse> }>(
      `${baseUrl}/gov/v1beta1/${API_URLS.COSMOS_PROPOSALS}`,
      {
        params: {
          'pagination.reverse': true,
          'pagination.limit': 1000,
        },
      }
    )
    return response.data
  },
}
