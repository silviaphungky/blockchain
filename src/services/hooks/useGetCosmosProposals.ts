import { useQuery } from '@tanstack/react-query'
import { CosmosApi, IProposalResponse } from '../cosmos-api'

const useGetCosmosProposals = () => {
  const response = useQuery<{ proposals: Array<IProposalResponse> }>({
    queryKey: ['cosmosProposals'],
    queryFn: CosmosApi.getProposals,
  })

  return response
}

export default useGetCosmosProposals
